import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/loans.module.css';
import {TbReportMoney} from 'react-icons/tb'
import Datatable from '../../Components/common/Datatable';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='px-4'>
      <h1>Dashboard</h1>
      <h6>Good day, {user.first_name}</h6>
      <div className={styles.main}>
        <h1 className='text-white mb-0'>Lorem Ipsum Dolar</h1>
        <p className='my-3'>Here are all of your  loan applications progress. To avoid setbacks and delays, please work closely with your Loan Officer when completing several loan applications.</p>
        <Link to={'/loans'}>
          <button className='btn-dark flex gap-2 items-center py-3 px-5 mt-3'><TbReportMoney /> Create a New Loan</button>
        </Link>
      </div>
      <h1 className='my-3'>Your Loan Progress</h1>
      <Datatable />
    </div>
  )
}

export default Dashboard;