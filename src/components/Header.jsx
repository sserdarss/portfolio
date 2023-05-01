
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      
      <nav className='flex'>
      
      <ul className='flex ml-auto mx-3 space-x-5'>
      <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/about'>
        <li>About Me </li>
        </Link>
        <Link to='/projects'>
        <li>Projects</li>
        </Link>
        <Link to='/contact'>
        <li>Contact</li>
        </Link>
       
      </ul>
      
      </nav>
    </div>
  )
}

export default Header