import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Controller, useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AiOutlinePlusCircle } from 'react-icons/ai'

const StepNineteen = ({ formData, setFormData, step, setStep }) => {
    const { handleSubmit, formState: { errors }, register, control, reset } = useForm({
        mode: 'onBlur',
        defaultValues: formData
    });
    const [show, setShow] = useState(false);

    const assetTypes = [
        {
            value: 'mutual',
            name: 'Mutual Funds'
        },
        {
            value: 'tangible',
            name: 'Tangible'
        },
        {
            value: 'untangible',
            name: 'Untangible'
        },
    ]

    const onSubmit = async (data) => {
        const updatedFormData = {
            ...formData,
            assets: [...formData.assets, data]
        };
        setFormData(updatedFormData);
        setShow(false);
        reset();
    }
    return (
        <div>
            <div className='w-full md:w-11 lg:w-full m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Verify Your Assets</h1>
                <p className='mt-2 text-gray-700'>Please review and verify your information.</p>
                <p className='mt-3 text-gray-700'>We will use the information you provide to process your loan application.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inner-forms w-full md:w-full m-auto mt-4'>
                        <div className='heading flex justify-between items-center p-3'>
                            <h1 className='text-900 text-lg text-start md:text-xl'>Assets</h1>
                            {
                                (formData.assets.length !== 0 && show === false) &&
                                <AiOutlinePlusCircle onClick={() => setShow(true)} className='link cursor-pointer' />
                            }
                        </div>
                        <div className='form-inside pb-6 mt-4'>
                            {
                                show ? (
                                    <div className='w-full md:w-11 lg:w-11 m-auto'>

                                        <div className='grid grid-cols-2 gap-3 my-3 max-w-full m-auto'>
                                            <div className='mb-2 dropdown w-full'>
                                                <label className='block mb-2 text-start'>Type of asset</label>
                                                <Controller
                                                    name="assetType"
                                                    {...register('assetType')}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Dropdown
                                                            {...field}
                                                            value={field.value || ''}
                                                            optionLabel="name"
                                                            options={assetTypes}
                                                            placeholder="Choose"
                                                            className="p-inputtext-lg text-start w-full"
                                                            onChange={(e) => field.onChange(e.value)}
                                                        />
                                                    )}
                                                />
                                                {errors?.assetType && <span className='text-red-600 text-start block mt-2'>{errors?.assetType?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Name of Mutual Fund</label>
                                                <InputText {...register("assetName", { required: 'Name is required' })}
                                                    className='w-full' placeholder='Enter name' />
                                                {errors?.assetName && <span className='text-red-600 text-start block mt-2'>{errors?.assetName?.message}</span>}
                                            </div>
                                            <div className='mb-2'>
                                                <label className='block mb-2 text-start'>Market Value (Estimate Okay)</label>
                                                <InputText type='number' {...register("marketValue", { required: 'Marlet Value is required' })}
                                                    className='w-full' placeholder='Enter Market Value' />
                                                {errors?.marketValue && <span className='text-red-600 text-start block mt-2'>{errors?.marketValue?.message}</span>}
                                            </div>
                                        </div>
                                        <div className="mt-6 flex align-items-center justify-content-center gap-4">
                                            <button className='btn-outline-secondary' type='button' onClick={() => setShow(false)}>Cancel</button>
                                            <button className='btn-primary text-white px-7' type='submit'>Add</button>
                                        </div>
                                    </div>

                                ) : (
                                    formData.assets.length === 0 ? (
                                        <p onClick={() => setShow(true)} className='link cursor-pointer flex items-center gap-1 text-start mx-4 my-0'><AiOutlinePlusCircle /> Add New Asset</p>
                                    ) : (
                                        <div className='mx-3'>
                                            <DataTable stripedRows value={formData.assets}>
                                                <Column field="assetType" header="Asset Type"></Column>
                                                <Column field="assetName" header="Asset Name"></Column>
                                                <Column field="marketValue" header="Market Value"></Column>
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

export default StepNineteen;