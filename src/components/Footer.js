import React from 'react'

import './Footer.css'
import Logo from '../images/nike-128.png'

import {FaFacebook} from 'react-icons/fa'
import{AiFillInstagram,AiFillTwitterCircle} from'react-icons/ai'


const Footer = () => {
  return (
    <div className='Footer'>
        <hr/>
        <div className='footer'>
            <div className='logo-text-social'>
                <img src={Logo} alt=''/>
                <p>Lorem ipsum dolor sit amet<br/> at consectetur</p>
                <div className="social-icons">
                    <span><FaFacebook size={25}/></span>
                    <span><AiFillInstagram size={25}/></span>
                    <span><AiFillTwitterCircle size={25}/></span>
                </div>
            </div>
            <div className='help'>
                <p>Get Help</p>
                <ul>
                    <li><a href='#About'/>About Us</li>
                    <li>Contact Us</li>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Payment Policy</li>
                </ul>
            </div>
            <div className='help'>
                <p>About Us</p>
                <ul>
                    <li>News</li>
                    <li>Service</li>
                    <li>Our Policy</li>
                    <li>Customer Care</li>
                    <li>Faq's</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='rights'>
            @ 2022 UnitKin. All rights reserved
        </div>
    </div>
  )
}

export default Footer