import React from 'react'
import styles from '../../styles/sidebar.module.css'
import { logolight } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
import { TbSmartHome, TbFileDollar } from 'react-icons/tb'
import { BsArrowLeft } from 'react-icons/bs'
import {FiDollarSign} from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className='text-start my-0 mb-3'>
          <img width={120} height={200} className='block h-12 mx-auto' src={logolight} />
        </div>
        <div id='sidebar-scroll' className={`${styles.sidebarItems} mt-7`}>
            <li className={styles.links}>
              <NavLink to='/dashboard' activeClassName={styles.activeLink}><TbSmartHome /> Dashboard</NavLink>
            </li>
            <li className={styles.links}>
              <NavLink to='/loans/closed' activeClassName={styles.activeLink}><FiDollarSign /> Closed Loans</NavLink>
            </li>
            <li className={styles.links}>
              <NavLink to='/loans/opened' activeClassName={styles.activeLink}><TbFileDollar /> Open Loans</NavLink>
            </li>
        </div>
      </div>
      <div className={styles.powered}>
        <a target='_blank' href='https://oqvest.com/'>
        <h6 className='flex items-center gap-2'><BsArrowLeft className='font-bold' /> Back to website</h6>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;