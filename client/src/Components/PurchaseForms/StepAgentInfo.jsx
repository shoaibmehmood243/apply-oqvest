import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { tick, cross } from '../../assets';
import { Card } from 'primereact/card';

const StepAgentInfo = ({ formData, setFormData, step, setStep }) => {
    const [state, setState] = useState(formData.propertyAside)
    const data = [
        {
            name: 'Yes',
            img: tick,
        },
        {
            name: 'No',
            img: cross,
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Provide Your Information</h1>
                <p className='text-gray-700'>These questions will help us verify your identity, check your credit score and complete your application. We're asking for this information now so that we can offer you personalized results sooner.</p>
                <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                    <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-5'>Real Estate Agent Information (optional)</h4>
                    <div className='dropdown w-10 md:w-8 lg:w-10 m-auto'>
                        <Dropdown value={formData.propertyOccupience} onChange={(e) => setFormData({ ...formData, propertyOccupience: e.value })} optionLabel="name"
                            placeholder="Choose Source of down payment" className="p-inputtext-lg text-start w-full" />
                        <span className='block text-start mt-3 text-gray-700'>If you are not currently working with a real estate agent. click here.</span>
                    </div>
                    <div className="mt-6 flex align-items-center justify-content-center gap-4">
                        <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                        <button className='btn-dark' type='submit' onClick={() => setStep(step + 1)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepAgentInfo;