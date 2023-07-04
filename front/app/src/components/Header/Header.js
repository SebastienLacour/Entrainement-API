import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo elden-ring" className='logo'/>
        <nav>
          <Link to='/' className='header-link'>Accueil</Link>
        </nav>
    </header>
  )
}
