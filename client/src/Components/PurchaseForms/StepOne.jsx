import React from 'react';
import {InputMask} from 'primereact/inputmask';

const StepOne = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Tell Us About the Loan You Want</h1>
                <p>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-2'>Subject Property Zip Code</h4>
                <div>
                    <InputMask value={formData.propertyZipCode} mask="99999" onChange={(e)=> setFormData({...formData, propertyZipCode: e.target.value})} type="text" className="p-inputtext-lg w-10 md:w-8 lg:w-10" placeholder="Enter your Zip Code here" />
                    <span className='block'>This is the zip code where you wish to purchase</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> {setStep(step-1); setFormData({...formData, loanType: ''})}}>Back</button>
                    <button className='btn-dark' type='submit' disabled={formData.propertyZipCode ? false : true} onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepOne