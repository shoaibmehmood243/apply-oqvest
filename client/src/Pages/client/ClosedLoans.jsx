import React from 'react';
import { TbReportMoney } from 'react-icons/tb'
import Datatable from '../../Components/common/Datatable';
import { Link } from 'react-router-dom';

const ClosedLoans = () => {
    return (<>
        <div className='flex justify-between my-5 mb-6'>
            <h1>Your Closed Loans</h1>
            <Link to={'/loans'}>
                <button className='btn-dark flex gap-2 items-center py-3 px-5 mt-3'><TbReportMoney /> Create a New Loan</button>
            </Link>
        </div>
        <Datatable />
    </>)
}

export default ClosedLoans;