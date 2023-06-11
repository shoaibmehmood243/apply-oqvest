import React from 'react'
import styles from '../../styles/sidebar.module.css'
import { logolight } from '../../assets'
import { NavLink } from 'react-router-dom'
import { TbSmartHome } from 'react-icons/tb'

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
        </div>
      </div>
      <div className={styles.powered}>
        <h6>Back to website</h6>
      </div>
    </div>
  )
}

export default Sidebar;