import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import {LuDollarSign} from 'react-icons/lu'

const StepTwo = ({ formData, setFormData, step, setStep }) => {
    return (
        <form>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className='text-900 text-2xl md:text-4xl mt-0'>Tell Us About the Loan You Want</h1>
                <p className='text-gray-700'>Your data is protected using bank level security.</p>
                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-3'>Your Purchase Price</h4>
                <div className='w-full md:w-8 lg:w-10 m-auto'>
                    <span className="p-input-icon-left w-full">
                        <LuDollarSign style={{ marginTop: '-10px' }} className=' text-xl' />
                        <InputNumber value={formData.purchasePrice}
                            onChange={(e) => setFormData({ ...formData, purchasePrice: e.value })} type="text"
                            className='w-full' placeholder="Estimated Purchase Price" />
                    </span>
                    <span className='block mt-3 text-start'>An estimate is okay if you haven't found a property yet.</span>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <button className='btn-outline-dark' type='button' onClick={() => setStep(step - 1)}>Back</button>
                    <button className='btn-dark' type='submit' disabled={formData.purchasePrice ? false : true} onClick={() => setStep(step + 1)}>Next</button>
                </div>
            </div>
        </form>
    )
}

export default StepTwo;