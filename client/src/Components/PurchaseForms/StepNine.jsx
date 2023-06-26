import React from 'react';
import { InputMask } from 'primereact/inputmask';

const StepNine = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Provide Your Information</h1>
                <p className='text-gray-700'>These questions will help us verify your identity, check your credit score and complete your application. We're asking for this information now so that we can offer you personalized results sooner.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-3'>Your Social Security Number (or ITIN)</h4>
                <div className='w-11 md:w-6 my-6 m-auto'>
                    <div className=" flex justify-content-center align-items-center m-auto">
                        <InputMask className='h-full w-full' mask='999-99-9999' placeholder='999-99-9999' value={formData.itin} 
                            onChange={(e)=> setFormData({...formData, itin: e.value})} />
                    </div>
                    <span className='block text-start mt-3'>Don't worry, this is private and is needed to securely complete the application process.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' disabled={formData.itin ? false : true} onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepNine;