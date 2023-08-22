import React, { useState} from 'react'
import { Link} from 'react-router-dom'
import './Header.scss'
import { BiSolidDownArrow } from "react-icons/bi"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='up-header'>
        <div className='left-header'>
            <Link className='logo'>
              <svg role="img" aria-labelledby="logo"  xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><title id="logo">Ableton Homepage</title><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
            </Link>
            <Link className='link'>Live</Link>
            <Link className='link'>Push</Link>
            <Link className='link'>Note</Link>
            <Link className='link'>Link</Link>
            <Link className='link'>Shop</Link>
            <Link className='link'>Packs</Link>
            <Link className='link'>Help</Link>
            <Link className='link more'>More +</Link>
            <div className='menu-button' onClick={toggleMenu}>
              Menu <BiSolidDownArrow className='arrow'/>
            </div>
            {isMenuOpen && 
              <div className='menu-responsive'>
                <Link className='logo'>
                  <div className='div-logo'>
                    <svg role="img" aria-labelledby="logo" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><title id="logo">Ableton Homepage</title><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
                    <div className='menu-arrow' onClick={toggleMenu}>
                      Menu <BiSolidDownArrow className='arrow'/>
                    </div>
                  </div>
                </Link>
                <Link className='link-responsive'>Live</Link>
                <Link className='link-responsive'>Push</Link>
                <Link className='link-responsive'>Note</Link>
                <Link className='link-responsive'>Link</Link>
                <Link className='link-responsive'>Shop</Link>
                <Link className='link-responsive'>Packs</Link>
                <Link className='link-responsive'>Help</Link>
                <Link className='link-responsive'>More +</Link>
              </div>
              
            }
        </div>
        <div className='right-header'>
            <Link className='link-right for-free'>Try Live for free</Link>
            <Link className='link-right log-or-register'>Log in or register</Link>
        </div>
      </div>
      <div className="down-header">
        <div className='second-header'>
          <Link className='li about'>About</Link>
          <Link className='li jobs'>Jobs</Link>
          <Link className='li apprenticeships'>Apprenticeships</Link>
        </div>
      </div>
    </div>
  )
}

export default Header