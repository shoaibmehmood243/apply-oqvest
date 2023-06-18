import React from 'react';
import { Dropdown } from 'primereact/dropdown';

const StepFourteen = ({formData, setFormData, step, setStep}) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-5'>Tell Us More About Your Loan</h1>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-2'>Subject Property Type</h4>
                <div className='dropdown w-full lg:w-8 m-auto mt-3'>
                    <Dropdown value={formData.propertyType} onChange={(e) => setFormData({...formData, propertyType: e.value})} optionLabel="name" 
                        placeholder="Choose Source of down payment" className="p-inputtext-lg text-start w-10 md:w-8 lg:w-10" />
                    <span className='block text-gray-700 text-start mt-2'>The property type of 1899 Finwood Road, New Brunswick, NJ 08901 couldn't be determined automatically . Please indicate your subject property type or contact to your loan officer .</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(step-1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepFourteen;