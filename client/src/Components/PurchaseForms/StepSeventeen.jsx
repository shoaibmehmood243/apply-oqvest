import React, { useState } from 'react';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Controller, useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const StepSeventeen = ({ formData, setFormData, step, setStep }) => {
    const { handleSubmit, formState: { errors }, register, control } = useForm({
        mode: 'onBlur',
        defaultValues: formData
    });

    const incomeTypes = [
        {
            value: 'earned',
            name: 'Earned'
        },
        {
            value: 'passive',
            name: 'Passive'
        },
        {
            value: 'portfolio',
            name: 'Portfolio'
        },
    ]

    const onSubmit = async (data) => {
        setStep(step + 1);
        setFormData(data);
    }
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Do You Have Any Other Income to Report?</h1>
                <p>Please review and verify your other income sources. We will use the information you provide to process your loan application.</p>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='inner-forms w-10 m-auto'>
                        <div className='heading'>
                            <h1 className='text-900 text-lg text-start p-3 md:text-xl'>Your Other Monthly Income</h1>
                        </div>
                        <div className='form-inside py-6'>
                            <div className='w-full md:w-11 lg:w-10 m-auto'>
                                <p className='text-center text-gray-600 mb-4'>NOTE: Reveal alimony, child support, separate maintenance, or other income ONLY if you want it considered in determining your qualification for this loan.</p>
                                
                                <div className='grid grid-cols-2 gap-3 my-3 max-w-full m-auto'>
                                    <div className='mb-2 dropdown w-full'>
                                        <label className='block mb-2 text-start'>Type of income</label>
                                        <Controller
                                            name="monthylyIncomeType"
                                            {...register('monthylyIncomeType')}
                                            control={control}
                                            render={({ field }) => (
                                                <Dropdown
                                                    {...field}
                                                    value={field.value || ''}
                                                    optionLabel="name"
                                                    options={incomeTypes}
                                                    placeholder="Choose"
                                                    className="p-inputtext-lg text-start w-full"
                                                    onChange={(e) => field.onChange(e.value)}
                                                />
                                            )}
                                        />
                                        {errors?.monthylyIncomeType && <span className='text-red-600 text-start block mt-2'>{errors?.monthylyIncomeType?.message}</span>}
                                    </div>
                                    <div className='mb-2'>
                                        <label className='block mb-2 text-start'>Monthly Income Amount</label>
                                        <InputText type='number' {...register("totalIncomeAmount", { required: 'Amount is required' })}
                                            className='w-full' placeholder='Enter monthly income amount' />
                                        {errors?.totalIncomeAmount && <span className='text-red-600 text-start block mt-2'>{errors?.totalIncomeAmount?.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex align-items-center justify-content-center gap-4">
                        <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='btn-dark' type='submit'>Next</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default StepSeventeen;