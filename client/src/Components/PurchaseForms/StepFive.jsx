import { Card } from 'primereact/card';
import React, { useState } from 'react'
import { married, marriedNot, separatedMarried, unmarried } from '../../assets';

const StepFive = ({ formData, setFormData, step, setStep }) => {
    const [state, setState] = useState(formData.martialStatus)
    const data = [
        {
            name: 'Unmarried',
            img: unmarried,
            text: 'I am NOT married'
        },
        {
            name: 'Married',
            img: married,
            text: 'I am married and will be applying with my spouse'
        },
        {
            name: 'Married',
            img: marriedNot,
            text: 'I am married but will not be applying with my spouse'
        },
        {
            name: 'Separated',
            img: separatedMarried,
            text: 'I am married, but currently separated'
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl'>Provide Your Marital Status</h1>
                <p>If you're applying with another person, they'll become a co-borrower on this loan. Co-borrowers are equally responsible for honoring the loan agreement. Their income, assets, liabilities and credit history will also be considered. If you choose to add a co-borrower later, your credit report will be pulled again when the co-borrower's credit is pulled. No non-owner or non-occupant co-borrowers allowed for qualifying purposes.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-2 mb-2'>Are You Married?</h4>
                <div className="flex justify-center w-full lg:w-27rem m-auto max-w-full animate">
                    {
                        data.map((data, index) => (
                            <div key={index} onClick={() => { setState(data.name); setTimeout(() => { setStep(step + 1) }, 0); setFormData({ ...formData, martialStatus: data.name }) }} className={`col-12 md:col-6`}>
                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img className='m-auto' src={data.img} />
                                    <p className='text-sm font-600 m-0 mt-3'>{data.name}</p>
                                    <span className='subtext'>{data.text}</span>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StepFive;