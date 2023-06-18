import React, { useState } from 'react'
import Navbar from '../../Components/common/Navbar';
import { homeOutline, refinance } from '../../assets';
import { Card } from 'primereact/card'
import StepOne from '../../Components/PurchaseForms/StepOne';
import StepTwo from '../../Components/PurchaseForms/StepTwo';
import StepThree from '../../Components/PurchaseForms/StepThree';
import StepFour from '../../Components/PurchaseForms/StepFour';
import StepFive from '../../Components/PurchaseForms/StepFive';
import StepSix from '../../Components/PurchaseForms/StepSix';
import StepSeven from '../../Components/PurchaseForms/StepSeven';
import StepEight from '../../Components/PurchaseForms/StepEight';
import StepNine from '../../Components/PurchaseForms/StepNine';
import StepTen from '../../Components/PurchaseForms/StepTen';
import StepEleven from '../../Components/PurchaseForms/StepEleven';
import StepTwelve from '../../Components/PurchaseForms/StepTwelve';
import StepThirteen from '../../Components/PurchaseForms/StepThirteen';
import StepFourteen from '../../Components/PurchaseForms/StepFourteen';
import StepFifteen from '../../Components/PurchaseForms/StepFifteen';
import Steps from '../../Components/common/Steps';
import StepSixteen from '../../Components/PurchaseForms/StepSixteen';
import StepSeventeen from '../../Components/PurchaseForms/StepSeventeen';
import StepEighteen from '../../Components/PurchaseForms/StepEighteen';
// import { Steps } from 'primereact/steps';

const LoanForm = () => {
    const steps = ['Start', 'Create', 'Verify', 'Approval'];
    const currentStep = 0;
    const [formData, setFormData] = useState({
        loanType: '',
        propertyZipCode: '',
        purchasePrice: '',
        downPayment: '',
        downPaymentSource: '',
        martialStatus: '',
        coBorrower: '',
        coBorrowerFirstName: '',
        coBorrowerLastName: '',
        coBorrowerPhone: '',
        coBorrowerEmail: '',
        coBorrowerMartial: '',
        dateOfBirth: '',
        itin: '',
        citizenship: '',
        primarystreetAddress: '',
        primarycity: '',
        primarystate: '',
        primaryzip: '',
        pimaryOwnership: '',
        pimaryLivingYear: '',
        pimaryLivingMonths: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        propertyOccupience: '',
        propertyAside: '',
        propertyType: '',
        monthlyMortgagePayment: '',
        totalMortgageExpense: '',
        employmentStatus: '',
        employerName: '',
        employerAddress: '',
        employerCity: '',
        employerState: '',
        employerZip: '',
        employerPhone: '',
        employerIndustry: '',
        employerPosition: '',
        employerStartMonth: '',
        employerStartYear: '',
        baseIncome: '',
        overtimeIncome: '',
        bonusIncome: '',
        comissionIncome: '',
        otherIncome: '',
        totalIncome: '',
        monthylyIncomeType: '',
        totalIncomeAmount: '',
        realEstateAddress: '',
        realEstateCity: '',
        realEstateState: '',
        realEstateZip: '',
        realEstateStatus: '',
        realEstateMarketValue: '',
        realEstateMonthlyRent: '',
        realEstateMonthlyExpense: '',
    });
    const [step, setStep] = useState(1);
    const [state, setState] = useState(formData.loanType)
    const data = [
        {
            name: 'Purchase',
            img: homeOutline
        },
        {
            name: 'Refinance',
            img: refinance
        }
    ]

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const renderStep = () => {
        switch (step) {
            case 2:
                return <StepOne handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 3:
                return <StepTwo handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 4:
                return <StepThree handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 5:
                return <StepFour handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 6:
                return <StepFive handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 7:
                return <StepSix handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 8:
                return <StepSeven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 9:
                return <StepEight handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 10:
                return <StepNine handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 11:
                return <StepTen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 12:
                return <StepEleven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 13:
                return <StepTwelve handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 14:
                return <StepThirteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 15:
                return <StepFourteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 16:
                return <StepFifteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 17:
                return <StepSixteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 18:
                return <StepSeventeen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            case 19:
                return <StepEighteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
            default:
                return null;
        }
    }
    return (<>
        <Navbar />
        <div className='steps flex-col'>
            <div>
            <Steps currentStep={currentStep} steps={steps} />
            </div>
            <div className="step-in">
                {
                    formData.loanType === '' ? (
                        <div>
                            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                                <h1 className='text-900 text-2xl md:text-4xl'>Tell Us About the Loan You Want</h1>
                                <p>Your data is protected using bank level security.</p>
                                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-6 mb-2'>What is the purpose of your loan?</h4>
                                <div className="flex w-full lg:w-27rem m-auto max-w-full animate">
                                    {
                                        data.map((data, index) => (
                                            <div key={index} onClick={() => { setState(data.name); setTimeout(() => { setStep(step + 1) }, 0); setFormData({ ...formData, loanType: data.name }) }} className={`col-12 md:col-6`}>
                                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                                    <img className='m-auto' src={data.img} />
                                                    <p className='text-sm font-600 m-0 mt-3'>Home {data.name}</p>
                                                </Card>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        renderStep()
                    )
                }
            </div>
        </div>
    </>)
}

export default LoanForm;