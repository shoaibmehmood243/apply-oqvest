import React from 'react';
import { InputNumber } from 'primereact/inputnumber';

const StepThree = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0'>Tell Us About the Loan You Want</h1>
                <p className='text-gray-700'>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-3'>Your Down Payment</h4>
                <div className='w-11 md:w-8 m-auto'>
                    <div className="flex w-full justify-content-center align-items-center m-auto slides-main">
                        <div className="slider-labels">%</div>
                        <InputNumber className='w-full' min={0} max={100} value={formData.downPayment} 
                            onChange={(e)=> setFormData({...formData, downPayment: e.value})} />
                    </div>
                    <span className='block mt-3 text-start'>Please provide the dollar amount or percentage you will be putting down.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' disabled={formData.downPayment ? false : true} onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepThree;