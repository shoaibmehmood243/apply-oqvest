import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../Pages/Register';
import Navbar from '../Components/common/Navbar';
import ForgetPassword from '../Pages/ForgetPassword';
import Dashboard from '../Pages/client/Dashboard';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch } from 'react-redux';
import { authActions, currentUser } from '../Features/authSlice';
import { useSelector } from 'react-redux';
import DashboardLayout from '../Components/Layout/DashboardLayout';
import LoadingPage from '../Pages/LoadingPage';
import SetPassword from '../Pages/SetPassword';

const Redirect = () => {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (!user) {
      if (token) {
        dispatch(currentUser(refreshToken));
      } else {
        dispatch(authActions.logout());
      }
    } else {
      if (!token) {
        dispatch(authActions.logout());
      }
    }
  }, [dispatch,refreshToken, token, location]);
  if (loading) {
    // Show loading screen or spinner while fetching user data
    return (
      <div style={{ minHeight: '100vh' }} className='flex justify-center flex-col gap-4 items-center'>
        <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" />
        <h6>Loading...</h6>
      </div>
    )
  }
  if (user && token) {
    return (
      <Routes>
        <Route path='' element={<DashboardLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    );
  }
  return (<>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/set-password/:token' element={<LoadingPage />} />
      <Route path='/set-password' element={<SetPassword />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  </>);
};

export default Redirect;