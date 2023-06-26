import React from 'react';
import { Dropdown } from 'primereact/dropdown';

const StepFour = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0'>Tell Us About the Loan You Want</h1>
                <p className='text-gray-700'>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-3'>Source of Down Payment</h4>
                <div className='dropdown'>
                    <Dropdown value={formData.downPaymentSource} onChange={(e) => setFormData({...formData, downPaymentSource: e.value})} optionLabel="name" 
                        placeholder="Choose Source of down payment" className="p-inputtext-lg text-start w-full md:w-full lg:w-11" />
                    <span className='block mt-3 text-start'>Please provide your source of down payment.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepFour;