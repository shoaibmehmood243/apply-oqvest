import React, { useState } from 'react'
import styles from '../styles/forms.module.css';
import { InputText } from 'primereact/inputtext';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from "axios";
import { resetPassword } from '../utils/api'

const SetPassword = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    const { handleSubmit, formState: { errors }, register, control } = useForm({
        mode: 'onBlur',
    });
    const { state } = useLocation();
    const [validUrl, setValidUrl] = useState(false);

    useEffect(() => {
        const userToken = state?.token;
        if (userToken) {
            const currentDate = new Date();
            const decodedToken = jwt_decode(userToken);
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                setValidUrl(false)
            } else {
                setValidUrl(true)
            }
        } else {
            setValidUrl(false)
        }
    }, [validUrl, state?.token])

    const onSubmit = async (data) => {
        setIsClicked(true);
        try {
            const res = await axios.post(resetPassword, { ...data });
            if (res.data.status === true) {
                toast.success('Password have been reset successfully. Login to continue.');
                setIsClicked(false);
                setTimeout(() => navigate('/dashboard'), 1500)
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
                <h1 className='text-center mb-10'>Reset Your Password.</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label className='block mb-3'>Create New Password</label>
                        <PasswordInput
                            control={control}
                            name="password"
                            label="Password"
                            placeholder='Create Password'
                            rules={{ required: "Password is required" }}
                        />
                        {errors?.password && <span className='text-red-600 mt-3'>{errors?.password?.message}</span>}
                    </div>
                    <div className='mb-7'>
                        <label className='block mb-3'>Confirm Password</label>
                        <PasswordInput
                            control={control}
                            name="cpassword"
                            label="Password"
                            placeholder='Create Password'
                            rules={{ required: "Confirm Password is required" }}
                        />
                        {errors?.cpassword && <span className='text-red-600 mt-3'>{errors?.cpassword?.message}</span>}
                    </div>
                    <div>
                        <button className='btn-primary w-full py-4'>
                            {isClicked ? <i className='pi pi-spin pi-spinner'></i> : (<>{'Change Password'}</>)}
                        </button>
                    </div>
                    <div className='text-center mt-8'>
                        <p><Link to='/login' className='link'>Back to login</Link></p>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default SetPassword;