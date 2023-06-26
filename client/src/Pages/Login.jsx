import React, { useEffect, useState } from 'react'
import styles from '../styles/forms.module.css';
import { InputText } from 'primereact/inputtext';
import PasswordInput from '../Components/common/PasswordInput';
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { login } from "../Features/authSlice";
import { MdOutlineMail } from 'react-icons/md';

const Login = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { user, error, message } = useSelector((state) => state.auth)
  const { handleSubmit, formState: { errors }, register, control } = useForm({
    mode: 'onBlur',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (error && isClicked === true) {
      setIsClicked(false);
      toast.error(message)
    }
    if (user) {
      setIsClicked(false);
      setTimeout(() => navigate('/dashboard'), 1500)
      toast.success('Logged in successfully')
    }
  }, [user, error, message, navigate])

  const onSubmit = async (data) => {
    setIsClicked(true);
    try {
      const res = await dispatch(login(data));
      if (res?.payload?.status === true) {
        toast.success('Logged in successfully')
        setTimeout(() => navigate('/dashboard'), 2000)
      }
      setIsClicked(false);

    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      setIsClicked(false);
    }
  }
  return (
    <div className={styles.form}>
      <Toaster />
      <div className={styles.formDiv}>
        <h1 className='text-center mb-10'>Log in to view, track and close your loan.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block mb-2'>Email</label>
            <span className="p-input-icon-left w-full">
            <MdOutlineMail style={{ marginTop: '-12px' }} className=' text-2xl' />
              <InputText {...register("email", {
                required: 'Email Address is required', pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid Email Address',
                },
              })} className='w-full' placeholder='Enter email' />
            </span>
            {errors?.email && <span className='text-red-600 mt-2'>{errors?.email?.message}</span>}
          </div>
          <div className='mb-5'>
            <PasswordInput
              control={control}
              feedback={false}
              name="password"
              label="Password"
              placeholder='Create Password'
              rules={{ required: "Password is required" }}
            />
          </div>
          <div>
            <button className='btn-primary w-full py-3'>
              {isClicked ? <i className='pi pi-spin pi-spinner'></i> : (<>{'Login'}</>)}
            </button>
          </div>
          <div className='text-center mt-4'>
            <p className='mb-2'><Link to='/forget-password' className='link'>Forgot Password?</Link></p>
            <p>Don’t have an account? <Link to='/register' className='link'>Create one</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;