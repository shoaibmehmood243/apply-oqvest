import React from 'react'
import { logodark } from '../../assets';
import styles from '../../styles/common.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../Features/authSlice';

const Navbar = () => {
  const {user} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const logout = ()=> {
    dispatch(authActions.logout())
  }
  return (
    <nav className='flex items-center justify-between py-4 px-32'>
      <Link to='/'>
        <img className={styles.logo} src={logodark} />
      </Link>
      <div>
        {
          user ? (
              <button onClick={logout} className='btn-dark'>Logout</button>
          ) : (
            <Link to='/login'>
              <button className='btn-dark'>Login</button>
            </Link>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;