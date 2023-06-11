import React from 'react'
import { logodark } from '../../assets';
import styles from '../../styles/common.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4 px-32'>
      <Link to='/'>
        <img className={styles.logo} src={logodark} />
      </Link>
      <div>
        <Link to='/login'>
          <button className='btn-dark'>Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;