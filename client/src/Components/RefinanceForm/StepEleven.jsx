import React, { useState } from 'react';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { Card } from 'primereact/card';
import { ownership1, ownership2, ownership3 } from '../../assets';
import { InputNumber } from 'primereact/inputnumber';

const StepEleven = ({ formData, setFormData, step, setStep }) => {
    const { handleSubmit, formState: { errors }, register, control } = useForm({
        mode: 'onBlur',
        defaultValues: formData
    });

    const [state, setState] = useState(formData.pimaryOwnership)
    const ownership = [
        {
            name: 'Own',
            img: ownership1
        },
        {
            name: 'Rent',
            img: ownership2
        },
        {
            name: 'No primary housing expense',
            img: ownership3
        },
    ]

    const onSubmit = async (data) => {
        setStep(step + 1);
        setFormData(data);
    }
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Provide Your Information</h1>
                <p>These questions will help us verify your identity, check your credit score and complete your application. We're asking for this information now so that we can offer you personalized results sooner.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-4 mb-2'>Your Primary & Mailing Address</h4>
                <form className='w-full md:w-11 lg:w-8 m-auto text-center mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <InputText {...register("primarystreetAddress", { required: 'Street address is required' })} className='w-full' placeholder='Street address' />
                        {errors?.primarystreetAddress && <span className='text-red-600 text-start block mt-2'>{errors?.primarystreetAddress?.message}</span>}
                    </div>
                    <div className='flex gap-3'>
                        <div className='mb-2'>

                            <InputText {...register("primarycity", { required: 'City is required' })} className='w-full' placeholder='City' />
                            {errors?.primarycity && <span className='text-red-600 text-start block mt-2'>{errors?.primarycity?.message}</span>}
                        </div>
                        <div className='mb-2'>

                            <InputText {...register("primarystate", {
                                required: 'State is required'
                            })} className='w-full' placeholder='State' />
                            {errors?.primarystate && <span className='text-red-600 text-start block mt-2'>{errors?.primarystate?.message}</span>}
                        </div>
                        <div className='mb-2'>

                            <InputMask {...register("primaryzip", { required: 'Zip code is required' })} className='w-full' mask='99999' placeholder='Zip' />
                            {errors?.primaryzip && <span className='text-red-600 text-start block mt-2'>{errors?.primaryzip?.message}</span>}
                        </div>
                    </div>
                    <h6 className='text-start my-3 text-lg font-semibold'>Do you own or rent?</h6>
                    <div className="flex justify-center w-full lg:w-27rem m-auto max-w-full animate">
                        {
                            ownership.map((data, index) => (
                                <div key={index} onClick={() => { setState(data.name); setFormData({ ...formData, pimaryOwnership: data.name }) }} className={`col-12 md:col-6`}>
                                    <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                        <img className='m-auto' src={data.img} />
                                        <p className='text-sm font-600 m-0 mt-3'>{data.name}</p>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <p className='text-start text-gray-800'>Select Own if you own your primary address, Rent if you pay rent at your primary address, or No primary housing expense if you do not own your primary address and do not have to pay rent.</p>
                    <h6 className='text-lg text-start font-semibold my-3'>Time living at primary address</h6>
                    <div className='flex gap-4'>
                        <div className='mb-2 w-full'>
                            <InputText type='number' name='pimaryLivingYear' {...register("pimaryLivingYear", { required: 'Years is required' })} className='w-full' placeholder='Years' />
                            {errors?.pimaryLivingYear && <span className='text-red-600 text-start block mt-2'>{errors?.pimaryLivingYear?.message}</span>}
                        </div>
                        <div className='mb-2 w-full'>
                            <InputText type='number' name='pimaryLivingMonths' {...register("pimaryLivingMonths", {
                                required: 'Months is required'
                            })} className='w-full' placeholder='Months' />
                            {errors?.pimaryLivingMonths && <span className='text-red-600 text-start block mt-2'>{errors?.pimaryLivingMonths?.message}</span>}
                        </div>
                    </div>
                    <p className='text-start my-2 text-gray-800'>Enter a whole number of years and a whole number of months that you have lived at your primary address (ex: 5 and 0 for 5 years and less than one month). Minimum 2 years of living history is required.</p>
                    <div className="mt-6 flex align-items-center justify-content-center gap-4">
                        <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='btn-dark' type='submit'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StepEleven;