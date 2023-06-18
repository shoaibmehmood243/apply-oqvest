import React, { useState } from 'react'
import styles from '../styles/forms.module.css';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from "axios";
import { forgetPassword } from '../utils/api'

const ForgetPassword = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { handleSubmit, formState: { errors }, register, control } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    setIsClicked(true);
    try {
      const res = await axios.post(forgetPassword, { ...data });
      if (res.data.status === true) {
        toast.success('Email have been sent to your mail address. Click on the link to set new password.')
        setIsClicked(false);
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
        <h1 className='text-center mb-10'>Forgot Password.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label className='block mb-3'>Email</label>
            <span className="p-input-icon-left w-full">
              <MdOutlineMail style={{ marginTop: '-15px' }} className='text-3xl' />
              <InputText {...register("email", {
                required: 'Email Address is required', pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid Email Address',
                },
              })} className='w-full' placeholder='Enter email' />
            </span>
            {errors?.email && <span className='text-red-600 mt-2'>{errors?.email?.message}</span>}
          </div>
          <div>
            <button className='btn-primary w-full py-3'>
            {isClicked ? <i className='pi pi-spin pi-spinner'></i> : (<>{'Submit'}</>)}
            </button>
          </div>
          <div className='text-center mt-4'>
            <p><Link to='/login' className='link'>Back to login</Link></p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default ForgetPassword;