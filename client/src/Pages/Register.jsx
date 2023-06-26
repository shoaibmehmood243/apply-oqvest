import React, { useState } from 'react'
import styles from '../styles/forms.module.css';
import { InputText } from 'primereact/inputtext';
import PasswordInput from '../Components/common/PasswordInput';
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { signup } from '../utils/api'
import { InputMask } from 'primereact/inputmask'

const Register = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { handleSubmit, formState: { errors }, register, control } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setIsClicked(true);
    try {
      const res = await axios.post(signup, { ...data });
      if (res.data.status === true) {
        toast.success('You have been registered successfully with Oqvest. Please login to continue.')
        setIsClicked(false);
        setTimeout(() => navigate('/login'), 2000)
      } else {
        toast.error(res.data.message)
        setIsClicked(false);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      setIsClicked(false);
    }
  }
  return (
    <div className={styles.form}>
      <div className={styles.formDiv}>
        <h1 className='text-center mb-10'>Create Your Account to Apply with Oqvest LLC.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block mb-2'>First Name</label>
            <span className="p-input-icon-left w-full">
              <BiUserCircle style={{ marginTop: '-12px' }} className=' text-2xl' />
              <InputText {...register("first_name", { required: 'First Name is required' })} className='w-full' placeholder='Enter your first name' />
            </span>
            {errors?.first_name && <span className='text-red-600 mt-2'>{errors?.first_name?.message}</span>}
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Middle Name</label>
            <span className="p-input-icon-left w-full">
              <BiUserCircle style={{ marginTop: '-12px' }} className=' text-2xl' />
              <InputText {...register("middle_name", { required: 'Middle Name is required' })} className='w-full' placeholder='Enter your middle name' />
            </span>
            {errors?.middle_name && <span className='text-red-600 mt-2'>{errors?.middle_name?.message}</span>}
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Last Name</label>
            <span className="p-input-icon-left w-full">
              <BiUserCircle style={{ marginTop: '-12px' }} className=' text-2xl' />
              <InputText {...register("last_name", { required: 'Last Name is required' })} className='w-full' placeholder='Enter your last name' />
            </span>
            {errors?.last_name && <span className='text-red-600 mt-2'>{errors?.last_name?.message}</span>}
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Primary Phone</label>
            <span className="p-input-icon-left w-full">
              <BsTelephone style={{ marginTop: '-12px' }} className=' text-xl' />
              <InputMask {...register("phone_number", { required: 'Phone Number is required' })} className='w-full' mask='(999)-999-9999' placeholder='(555)-555-5555' />
            </span>
            {errors?.phone_number && <span className='text-red-600 mt-2'>{errors?.phone_number?.message}</span>}
          </div>
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
              name="password"
              label="Password"
              placeholder='Create Password'
              rules={{ required: "Password is required" }}
            />
          </div>
          <div>
            <button className='btn-primary w-full py-3'>
            {isClicked ? <i className='pi pi-spin pi-spinner'></i> : (<>{'Create Account'}</>)}
            </button>
          </div>
          <div className='text-center mt-4'>
            <p>Already have an account? <Link to='/login' className='link'>Login</Link></p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default Register;