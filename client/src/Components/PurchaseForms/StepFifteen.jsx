import React from 'react';
import { InputText } from 'primereact/inputtext';

const StepFifteen = ({ formData, setFormData, step, setStep }) => {
    return (
        <div>
            <div className='w-full md:w-11 lg:w-8 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0 mb-2'>Verify Loan Application</h1>
                <p className='text-gray-700'>Please review and verify your information. We will use the information you provide to process your loan application</p>
                <h4 className='text-900 text-xl md:text-xl font-semibold mt-6 mb-6'>Your Current Expenses for {formData.streetAddress}</h4>
                <div className='w-11 md:w-10'>
                    <h6 className='text-md font-semibold mb-3 text-start'>First Mortgage Payment</h6>
                    <div>
                        <div className=" flex justify-content-center align-items-center m-auto slides-main">
                            <div className="slider-labels w-11rem text-sm text-gray-500">Monthly Amount</div>
                            <InputText type='number' className='w-full h-full' value={formData.monthlyMortgagePayment}
                                onChange={(e) => setFormData({ ...formData, monthlyMortgagePayment: e.value })} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=" flex justify-content-center align-items-center m-auto slides-main">
                            <div className="slider-labels w-11rem text-sm text-gray-500">Total Expenses</div>
                            <InputText type='number' className='w-full h-full' value={formData.totalMortgageExpense}
                                onChange={(e) => setFormData({ ...formData, totalMortgageExpense: e.value })} />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                    <button className='btn-dark' type='submit' onClick={() => setStep(step + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default StepFifteen;