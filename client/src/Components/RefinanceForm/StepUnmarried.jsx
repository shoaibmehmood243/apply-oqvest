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
    const relationshipStatus = [
        { value: 'civil_union', name: 'Civil union' },
        { value: 'domestic_partnership', name: 'Domestic partnership' },
        { value: 'registered_reciprocal_beneficiary_relationship', name: 'Registered Reciprocal Beneficiary Relationship' },
        { value: 'other', name: 'Other' }
    ]

    const usaStates = [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
        { value: "FL", label: "Florida" },
        { value: "GA", label: "Georgia" },
        { value: "HI", label: "Hawaii" },
        { value: "ID", label: "Idaho" },
        { value: "IL", label: "Illinois" },
        { value: "IN", label: "Indiana" },
        { value: "IA", label: "Iowa" },
        { value: "KS", label: "Kansas" },
        { value: "KY", label: "Kentucky" },
        { value: "LA", label: "Louisiana" },
        { value: "ME", label: "Maine" },
        { value: "MD", label: "Maryland" },
        { value: "MA", label: "Massachusetts" },
        { value: "MI", label: "Michigan" },
        { value: "MN", label: "Minnesota" },
        { value: "MS", label: "Mississippi" },
        { value: "MO", label: "Missouri" },
        { value: "MT", label: "Montana" },
        { value: "NE", label: "Nebraska" },
        { value: "NV", label: "Nevada" },
        { value: "NH", label: "New Hampshire" },
        { value: "NJ", label: "New Jersey" },
        { value: "NM", label: "New Mexico" },
        { value: "NY", label: "New York" },
        { value: "NC", label: "North Carolina" },
        { value: "ND", label: "North Dakota" },
        { value: "OH", label: "Ohio" },
        { value: "OK", label: "Oklahoma" },
        { value: "OR", label: "Oregon" },
        { value: "PA", label: "Pennsylvania" },
        { value: "RI", label: "Rhode Island" },
        { value: "SC", label: "South Carolina" },
        { value: "SD", label: "South Dakota" },
        { value: "TN", label: "Tennessee" },
        { value: "TX", label: "Texas" },
        { value: "UT", label: "Utah" },
        { value: "VT", label: "Vermont" },
        { value: "VA", label: "Virginia" },
        { value: "WA", label: "Washington" },
        { value: "WV", label: "West Virginia" },
        { value: "WI", label: "Wisconsin" },
        { value: "WY", label: "Wyoming" }
    ];
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl'>Provide Your Marital Status</h1>
                <p className='mt-3 text-gray-700'>If you're applying with another person, they'll become a co-borrower on this loan. Co-borrowers are equally responsible for honoring the loan agreement. Their income, assets, liabilities and credit history will also be considered. If you choose to add a co-borrower later, your credit report will be pulled again when the co-borrower's credit is pulled. No non-owner or non-occupant co-borrowers allowed for qualifying purposes.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-4 mb-3'>Unmarried Addendum</h4>
                <div className='w-full md:w-8 m-auto'>
                    <div>
                        <p className='text-center mb-2 text-gray-700'>Is there a person who is not your legal spouse but who currently has real property rights similar to those of a legal spouse?</p>
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
                                            <Dropdown options={relationshipStatus} value={formData.relationshipType} onChange={(e) => setFormData({...formData, relationshipType: e.value})} optionLabel="name" 
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