import React, { useState } from 'react';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Controller, useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AiOutlinePlusCircle } from 'react-icons/ai'

const StepSixteen = ({ formData, setFormData, step, setStep }) => {
    const { handleSubmit, formState: { errors }, register, control, reset } = useForm({
        mode: 'onBlur',
        defaultValues: formData
    });
    const [show, setShow] = useState(false);

    const employmentStatuses = [
        {
            value: 'employed',
            name: 'Employed'
        },
        {
            value: 'unemployed',
            name: 'unemployed'
        },
    ]

    const onSubmit = async (data) => {
        const updatedFormData = {
            ...formData,
            employements: [...formData.employements, data]
        };
        setFormData(updatedFormData);
        setShow(false);
        reset();
    }
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Verify Employment</h1>
                <p className='text-gray-700'>Please review and verify your employment history. At least 2 years of employment history must be provided.</p>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='inner-forms'>
                        <div className='heading flex justify-between items-center p-3'>
                            <h1 className='text-900 text-lg text-start md:text-xl'>Your Employment History</h1>
                            {
                                (formData.employements.length !== 0 && show === false) &&
                                <AiOutlinePlusCircle onClick={() => setShow(true)} className='link cursor-pointer' />
                            }
                        </div>
                        <div className='form-inside py-6'>
                            {
                                show ? (
                                    <div className='w-full md:w-11 lg:w-10 m-auto'>
                                        <div className='dropdown mb-3'>
                                            <label className='block mb-2 text-start'>Employment Status</label>
                                            <Controller
                                                name="employmentStatus"
                                                {...register('employmentStatus')}
                                                control={control}
                                                render={({ field }) => (
                                                    <Dropdown
                                                        {...field}
                                                        value={field.value || ''}
                                                        optionLabel="name"
                                                        options={employmentStatuses}
                                                        placeholder="Select Employment Status"
                                                        className="p-inputtext-lg text-start w-full"
                                                        onChange={(e) => field.onChange(e.value)}
                                                    />
                                                )}
                                            />
                                            {errors?.employmentStatus && <span className='text-red-600 text-start block mt-2'>{errors?.employmentStatus?.message}</span>}
                                        </div>
                                        <div className='mb-3'>
                                            <label className='block mb-2 text-start'>Employer Name</label>
                                            <InputText {...register("employerName", { required: 'Street address is required' })}
                                                className='w-full' placeholder='Name of employer' />
                                            {errors?.employerName && <span className='text-red-600 text-start block mt-2'>{errors?.employerName?.message}</span>}
                                        </div>
                                        <div className='mb-3'>
                                            <label className='block mb-2 text-start'>Employer Address</label>
                                            <InputText {...register("employerAddress", { required: 'Street address is required' })} className='w-full' placeholder='Street address' />
                                            {errors?.employerAddress && <span className='text-red-600 text-start block mt-2'>{errors?.employerAddress?.message}</span>}
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='mb-2'>
                                                <InputText {...register("employerCity", { required: 'City is required' })} className='w-full' placeholder='City' />
                                                {errors?.employerCity && <span className='text-red-600 text-start block mt-2'>{errors?.employerCity?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <InputText {...register("employerState", {
                                                    required: 'State is required'
                                                })} className='w-full' placeholder='State' />
                                                {errors?.employerState && <span className='text-red-600 text-start block mt-2'>{errors?.employerState?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <InputMask {...register("employerZip", { required: 'Zip code is required' })} className='w-full' mask='99999' placeholder='Zip' />
                                                {errors?.employerZip && <span className='text-red-600 text-start block mt-2'>{errors?.employerZip?.message}</span>}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-3 my-3 max-w-full m-auto'>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Phone</label>
                                                <InputMask {...register("employerPhone", { required: 'Phone number is required' })}
                                                    className='w-full' mask='(999)-999-9999' placeholder='(555)-555-5555' />
                                                {errors?.employerPhone && <span className='text-red-600 text-start block mt-2'>{errors?.employerPhone?.message}</span>}
                                            </div>
                                            <div className='mb-2 dropdown w-full'>
                                                <label className='block mb-2 text-start'>Employment Status</label>
                                                <Controller
                                                    name="employerIndustry"
                                                    {...register('employerIndustry')}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Dropdown
                                                            {...field}
                                                            value={field.value || ''}
                                                            optionLabel="name"
                                                            options={employmentStatuses}
                                                            placeholder="Choose"
                                                            className="p-inputtext-lg text-start w-full"
                                                            onChange={(e) => field.onChange(e.value)}
                                                        />
                                                    )}
                                                />
                                                {errors?.employerIndustry && <span className='text-red-600 text-start block mt-2'>{errors?.employerIndustry?.message}</span>}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-3 gap-3 mb-3 max-w-full m-auto'>
                                            <div className='mb-3'>
                                                <label className='block mb-2 text-start'>Position/Title</label>
                                                <InputText {...register("employerPosition", { required: 'Position is required' })}
                                                    className='w-full' placeholder='Position/Title' />
                                                {errors?.employerPosition && <span className='text-red-600 text-start block mt-2'>{errors?.employerPosition?.message}</span>}
                                            </div>
                                            <div className='mb-3'>
                                                <label className='block mb-2 text-start'>Start Month</label>
                                                <Calendar view="month" {...register("employerStartMonth", { required: 'Month is required' })} placeholder='Start Month' className='w-full' />
                                                {errors?.employerStartMonth && <span className='text-red-600 text-start block mt-2'>{errors?.employerStartMonth?.message}</span>}
                                            </div>
                                            <div className='mb-3'>
                                                <label className='block mb-2 text-start'>Start Year</label>
                                                <Calendar view='year' {...register("employerStartYear", { required: 'Year is required' })} placeholder='Start Year' className='w-full' />
                                                {errors?.employerStartYear && <span className='text-red-600 text-start block mt-2'>{errors?.employerStartYear?.message}</span>}
                                            </div>
                                        </div>
                                        <label className='my-3 text-start'>Gross Monthly Income (per month)</label>
                                        <div className='grid grid-cols-2 gap-3 my-3 max-w-full m-auto'>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Base</label>
                                                <InputText type='number' {...register("baseIncome", { required: 'Base income is required' })} className='w-full' />
                                                {errors?.baseIncome && <span className='text-red-600 text-start block mt-2'>{errors?.baseIncome?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Overtime</label>
                                                <InputText type='number' {...register("overtimeIncome")} className='w-full' />
                                                {errors?.overtimeIncome && <span className='text-red-600 text-start block mt-2'>{errors?.overtimeIncome?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Bonus</label>
                                                <InputText type='number' {...register("bonusIncome")} className='w-full' />
                                                {errors?.bonusIncome && <span className='text-red-600 text-start block mt-2'>{errors?.bonusIncome?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Comission</label>
                                                <InputText type='number' {...register("comissionIncome")} className='w-full' />
                                                {errors?.comissionIncome && <span className='text-red-600 text-start block mt-2'>{errors?.comissionIncome?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Other</label>
                                                <InputText type='number' {...register("otherIncome")} className='w-full' />
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Total Income per month</label>
                                                <InputText type='number' {...register("totalIncome")} className='w-full' />
                                            </div>
                                        </div>
                                        <div className="mt-6 flex align-items-center justify-content-center gap-4">
                                            <button className='btn-outline-secondary' type='button' onClick={() => setShow(false)}>Cancel</button>
                                            <button className='btn-primary text-white px-7' type='submit'>Add</button>
                                        </div>
                                    </div>
                                ) : (
                                    formData.employements.length === 0 ? (
                                        <p onClick={() => setShow(true)} className='link cursor-pointer flex items-center gap-1 text-start mx-4 my-0'><AiOutlinePlusCircle /> Add New Employements</p>
                                    ) : (
                                        <div className='mx-3'>
                                            <DataTable stripedRows value={formData.employements}>
                                                <Column field="employmentStatus" header="Status"></Column>
                                                <Column field="employerName" header="Name"></Column>
                                                <Column field="employerIndustry" header="Industry"></Column>
                                                <Column field="employerPosition" header="Position"></Column>
                                                <Column field="employerStartYear" header="Start Year"></Column>
                                                <Column field="totalIncome" header="Total Income"></Column>
                                            </DataTable>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className="mt-6 flex align-items-center justify-content-center gap-4">
                        <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='btn-dark' type='submit' onClick={() => { onSubmit(); setStep(step + 1) }}>Next</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default StepSixteen;