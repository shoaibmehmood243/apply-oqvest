import { Card } from 'primereact/card';
import React, { useState } from 'react'
import { tick, cross } from '../../assets';
import { Dropdown } from 'primereact/dropdown';

const StepUnmarried = ({ formData, setFormData, step, setStep }) => {
    const [state, setState] = useState(formData.otherLegalStatus)
    const data = [
        {
            name: 'Yes',
            img: tick
        },
        {
            name: 'No',
            img: cross
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
            <h1 className='text-900 text-2xl md:text-4xl'>Provide Your Marital Status</h1>
                <p className='mt-3 text-gray-500'>If you're applying with another person, they'll become a co-borrower on this loan. Co-borrowers are equally responsible for honoring the loan agreement. Their income, assets, liabilities and credit history will also be considered. If you choose to add a co-borrower later, your credit report will be pulled again when the co-borrower's credit is pulled. No non-owner or non-occupant co-borrowers allowed for qualifying purposes.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-4 mb-4'>Unmarried Addendum</h4>
                <div className='w-full md:w-8 m-auto'>
                    <div>
                        <p className='text-center mb-2 text-gray-500'>Is there a person who is not your legal spouse but who currently has real property rights similar to those of a legal spouse?</p>
                        <div className='w-full m-auto md:w-10'>
                            <div className="flex justify-center gap-0 m-auto max-w-full animate">
                                {
                                    data.map((data, index) => (
                                        <div key={index} onClick={() => { setState(data.name); setFormData({ ...formData, otherLegalStatus: data.name }) }} className={`col-12 md:col-6`}>
                                            <Card style={{height: '60px'}} className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                                <div className='flex items-center justify-center gap-3'>
                                                    <img height={32} width={32} className='m-auto' src={data.img} />
                                                    <p className='text-sm font-600 m-0'>{data.name}</p>
                                                </div>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                formData.otherLegalStatus === 'Yes' && (
                                    <div className='mt-4 text-start'>
                                        <div className='dropdown'>
                                            <label className='block mb-2'>What state was this relationship formed?</label>
                                            <Dropdown value={formData.relationshipStatus} onChange={(e) => setFormData({...formData, relationshipStatus: e.value})} optionLabel="name" 
                                                placeholder="State" className="p-inputtext-lg w-full" />
                                        </div>
                                        <div className='dropdown mt-5'>
                                            <label className='block mb-2'>What type of relationship is this?</label>
                                            <Dropdown value={formData.relationshipType} onChange={(e) => setFormData({...formData, relationshipType: e.value})} optionLabel="name" 
                                                placeholder="Choose" className="p-inputtext-lg w-full" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={() => setStep(step + 2)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepUnmarried;