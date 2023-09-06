import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
 
  const options = [
    {value: "English", label: "English"},
    {value: "Deutsch", label: "Deutsch"},
    {value: "Français", label: "Français"},
    {value: "日本語", label: "日本語"},
    {value: "简体中文", label: "简体中文"},
    {value: "Español", label: "Español"}
  ]

  return (
    <div className='footer'>
        <div className='foot-aple'>Apleton</div>
        <div className='foot-info'>
            <div className='register'>
                <Link className='foot-link'>Register Live or Push</Link>
                <Link className='foot-link'>About Apleton</Link>
                <Link className='foot-link'>Jobs</Link>
                <div className='icons'>
                    <Link to="/" target='_blank' className='icon face'><BiLogoFacebook /></Link>
                    <Link to="/" target='_blank' className='icon twi'><AiOutlineTwitter /></Link>
                    <Link to="/" target='_blank' className='icon you'><AiFillYoutube /></Link>
                    <Link to="/" target='_blank' className='icon ins'><AiFillInstagram /></Link>
                </div>
            </div>
            <div className='education'>
                <strong>Education</strong>
                <Link className='foot-link'>Offers for students and teachers</Link>
                <Link className='foot-link'>Apleton for the Classroom</Link>
                <Link className='foot-link'>Apleton for Colleges and Universities</Link>
            </div>
            <div className='sign-up'>
                <strong>Sign up to our newsletter</strong>
                <div>
                    Enter your email address to stay up to date with the latest offers, tutorials, 
                    downloads, surveys and more.
                </div>
                <div className='regis'>
                    <input className='email' placeholder='Email Address'/>
                    <input type='submit' className='sign' value='Sign up'/>
                </div>
            </div>
        </div>
        <div className='foot-info2'>
            <div className='find'>
                <strong>Community</strong>
                <Link className='foot-link'>Find Apleton User Groups</Link>
                <Link className='foot-link'>Find Certified Training</Link>
                <Link className='foot-link'>Become a Certified Trainer</Link>
            </div>
            <div className='language'>
                <strong>Language</strong>
                <Select className='chooser' options={options}/>      
            </div>
        </div>
        <div className='made'>
            <div className='information'>
                <div>Contact Us</div>
                <div>Press Resources</div>
                <div>Legal Info</div>
                <div>Privacy Policy</div>
                <div>Cookie Settings</div>
                <div>Imprint</div>
            </div>
            <div className='berlin'>
                <div>Made in Peru</div>
                <svg role="img" aria-labelledby="logo"  xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><title id="logo">Ableton Homepage</title><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Footer