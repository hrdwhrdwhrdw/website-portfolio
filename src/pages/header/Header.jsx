import React from 'react'
import Navbar from './navbar/Navbar';
import './Header.scss';
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="" />
      <Navbar />
    </header>
  )
}

export default Header