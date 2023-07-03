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
import StepFiveMissed from '../../Components/PurchaseForms/StepFiveMissed';
import StepUnmarried from '../../Components/PurchaseForms/StepUnmarried';
import StepSpouseInfo from '../../Components/PurchaseForms/StepSpouseInfo';
import StepAgentInfo from '../../Components/PurchaseForms/StepAgentInfo';
import StepNineteen from '../../Components/PurchaseForms/StepNineteen';
import StepTwenty from '../../Components/PurchaseForms/StepTwenty';
import StepTwentyOne from '../../Components/PurchaseForms/StepTwentyOne';
import { StepAgentInfoRefinance, StepEightRefinance, StepEighteenRefinance, StepElevenRefinance, StepFifteenRefinance, StepFiveMissedRefinance, StepFiveRefinance, StepFourRefinance, StepFourteenRefinance, StepNineRefinance, StepNineteenRefinance, StepOneRefinance, StepRealEstateRefinance, StepSevenRefinance, StepSeventeenRefinance, StepSixRefinance, StepSixteenRefinance, StepSpouseInfoRefinance, StepSubmitRefinance, StepTenRefinance, StepThirteenRefinance, StepThreeRefinance, StepTwelveRefinance, StepTwentyOneRefinance, StepTwentyRefinance, StepTwoRefinance, StepUnmarriedRefinance } from '../../Components/RefinanceForm';
import StepRealEstate from '../../Components/PurchaseForms/StepRealEstate';
import StepSubmit from '../../Components/PurchaseForms/StepSubmit';
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
        isVeteran: '',
        mortgageLoans: '',
        martialStatus: '',
        otherLegalStatus: '',
        relationshipStatus: '',
        relationshipType: '',
        spouseFirstName: '',
        spouseLastName: '',
        spousePhone: '',
        spouseEmail: '',
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
        primaryAddressRent: '',
        pimaryLivingYear: '',
        pimaryLivingMonths: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        propertyOccupience: '',
        realtorFirstName: '',
        realtorLastName: '',
        realtorCompanyName: '',
        realtorPhone: '',
        realtorEmail: '',
        propertyAside: '',
        propertyType: '',
        monthlyMortgagePayment: '',
        totalMortgageExpense: '',
        employements: [],
        otherMonthlyIncomeReport: [],
        realEstateInfo: [],
        realEstateAddress: '',
        realEstateCity: '',
        realEstateState: '',
        realEstateZip: '',
        realEstateStatus: '',
        realEstateMarketValue: '',
        realEstateMonthlyRent: '',
        realEstateMonthlyExpense: '',
        assets: [],
        liabilities: [],
        gifts: []
    });
    const [step, setStep] = useState(1);
    const [state, setState] = useState(formData.loanType)
    const data = [
        {
            name: 'Purchase',
            img: homeOutline,
            text: 'I’m buying a home and need a mortgage'
        },
        {
            name: 'Refinance',
            img: refinance,
            text: 'I want to refinance my existing mortgage'
        }
    ]

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const renderStep = () => {
        if (formData.loanType === 'Purchase') {
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
                    return <StepFiveMissed handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 7:
                    return <StepFive handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 8:
                    return <StepUnmarried handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 9:
                    return <StepSpouseInfo handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 10:
                    return <StepSix handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 11:
                    return <StepSeven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 12:
                    return <StepEight handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 13:
                    return <StepNine handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 14:
                    return <StepTen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 15:
                    return <StepEleven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 16:
                    return <StepTwelve handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 17:
                    return <StepThirteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 18:
                    return <StepAgentInfo handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 19:
                    return <StepRealEstate handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 20:
                    return <StepFourteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 21:
                    return <StepFifteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 22:
                    return <StepSixteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 23:
                    return <StepSeventeen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 24:
                    return <StepEighteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 25:
                    return <StepNineteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 26:
                    return <StepTwenty handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 27:
                    return <StepTwentyOne handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 28:
                    return <StepSubmit handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                default:
                    return null;
            }
        } else {
            switch (step) {
                case 2:
                    return <StepOneRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 3:
                    return <StepTwoRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 4:
                    return <StepThreeRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 5:
                    return <StepFourRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 6:
                    return <StepFiveMissedRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 7:
                    return <StepFiveRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 8:
                    return <StepUnmarriedRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 9:
                    return <StepSpouseInfoRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 10:
                    return <StepSixRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 11:
                    return <StepSevenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 12:
                    return <StepEightRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 13:
                    return <StepNineRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 14:
                    return <StepTenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 15:
                    return <StepElevenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 16:
                    return <StepTwelveRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 17:
                    return <StepThirteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 18:
                    return <StepAgentInfoRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 19:
                    return <StepRealEstateRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 20:
                    return <StepFourteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 21:
                    return <StepFifteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 22:
                    return <StepSixteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 23:
                    return <StepSeventeenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 24:
                    return <StepEighteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 25:
                    return <StepNineteenRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 26:
                    return <StepTwentyRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 27:
                    return <StepTwentyOneRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 28:
                    return <StepSubmitRefinance handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                default:
                    return null;
            }
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
                        <div className='py-3'>
                            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                                <h1 className='text-900 text-2xl md:text-4xl mb-2'>Tell Us About the Loan You Want</h1>
                                <p className='text-gray-700'>Your data is protected using bank level security.</p>
                                <h4 className='text-900 text-xl md:text-2xl font-semibold mt-7 mb-4'>What is the purpose of your loan?</h4>
                                <div className="flex w-full lg:w-27rem m-auto max-w-full animate">
                                    {
                                        data.map((data, index) => (
                                            <div key={index} onClick={() => { setState(data.name); setTimeout(() => { setStep(step + 1) }, 0); setFormData({ ...formData, loanType: data.name }) }} className={`col-12 md:col-6`}>
                                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                                    <img className='m-auto' src={data.img} />
                                                    <p className='text-sm font-600 m-0 mt-3'>Home {data.name}</p>
                                                    <p className='text-xs text-gray-600 m-0 mt-2'>{data.text}</p>
                                                </Card>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='py-3'>
                            {renderStep()}
                        </div>
                    )
                }
            </div>
        </div>
    </>)
}

export default LoanForm;