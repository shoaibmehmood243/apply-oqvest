import React from 'react';
import { Dropdown } from 'primereact/dropdown';

const StepTen = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Provide Your Information</h1>
                <p>These questions will help us verify your identity, check your credit score and complete your application. We're asking for this information now so that we can offer you personalized results sooner.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-5 mb-2'>Your Citizenship Status</h4>
                <div className='dropdown'>
                    <Dropdown value={formData.citizenship} onChange={(e) => setFormData({...formData, citizenship: e.value})} optionLabel="name" 
                        placeholder="Choose" className="p-inputtext-lg w-10 md:w-8 lg:w-4 text-start" />
                    <span className='block'>Your citizenship status is required for any mortgage loan application.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepTen;