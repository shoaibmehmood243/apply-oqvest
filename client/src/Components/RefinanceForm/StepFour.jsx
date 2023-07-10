import React from 'react';
import { InputNumber } from 'primereact/inputnumber';

const StepFour = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Tell Us About the Loan You Want</h1>
                <p className='text-gray-700'>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-3'>Your Cash Out Amount</h4>
                <div className='w-full md:w-11 lg:w-10 m-auto'>
                    <InputNumber value={formData.cashoutAmount}
                        onChange={(e)=> setFormData({...formData, cashoutAmount: e.value})} 
                        className=" w-full" placeholder="Your Cash Out Amount" />
                    <span className='block mt-3 text-start'>Leave Blank if you do not want to cash out any equity.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={()=> { formData.cashoutAmount !== '' && setStep(step+1)}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepFour;