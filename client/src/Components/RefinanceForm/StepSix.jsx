import { Card } from 'primereact/card';
import React, { useState } from 'react'
import { tick, cross } from '../../assets';

const StepSix = ({ formData, setFormData, step, setStep }) => {
    const [state, setState] = useState(formData.coBorrower)
    const data = [
        {
            name: 'Yes',
            img: tick,
            text: 'I will only be applying by myself.'
        },
        {
            name: 'No',
            img: cross,
            text: 'I will be applying with another person(s).'
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl'>Provide Co-Borrower Information</h1>
                <p>Provide Co-Borrower Information</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-5 mb-2'>Will You Be Applying With Anyone Else?</h4>
                <div className="flex justify-center w-full lg:w-8 gap-5 m-auto max-w-full animate">
                    {
                        data.map((data, index) => (
                            <div key={index} onClick={() => { setState(data.name); setTimeout(() => { setStep(step + 1) }, 0); setFormData({ ...formData, coBorrower: data.name }) }} className={`col-12 md:col-6`}>
                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img className='m-auto' src={data.img} />
                                    <p className='text-sm font-600 m-0 mt-3'>{data.name}</p>
                                    <span className='subtext'>{data.text}</span>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={()=> setStep(formData.martialStatus !== 'Unmarried' ? step - 1 : step - 2)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={()=> setStep(step+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepSix;