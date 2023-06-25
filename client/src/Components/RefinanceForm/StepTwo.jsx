import React from 'react';
import { InputNumber } from 'primereact/inputnumber';

const StepTwo = ({formData, setFormData, step, setStep}) => {
    return (
        <form>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Tell Us About the Loan You Want</h1>
                <p>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-2'>Your Estimated Property Value</h4>
                <div>
                    <InputNumber value={formData.purchasePrice}
                        onChange={(e)=> setFormData({...formData, purchasePrice: e.value})} type="text" 
                        className="p-inputtext-lg w-10 md:w-8 lg:w-10" placeholder="Estimated Property Value" />
                    <span className='block mt-2'>Estimate what you think your home would sell for right now.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' disabled={formData.purchasePrice ? false : true} onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </form>
    )
}

export default StepTwo;