import React from 'react'

import './Header.css'
import {FaArrowCircleRight} from 'react-icons/fa'
import{AiFillStar} from 'react-icons/ai'

import Arrowd from '../images/down-arrow.png'
import Greenshoe from '../images/zachary-keimig-qm0ZMDlIwm8-unsplash.jpg'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div className='Header'>
        <div className='overlay-blur5'></div>
        <div className='overlay-blur6'></div>
        <div className='overlay-blur6'></div>
        <div className='header-details'>
            <span> Summer</span>
            <span>Collections</span>
            <span className='year-no'>2022</span>
            <p>The styles of shoe available to the customers are<br/>endless and profit also endless</p>
           <Link to='/Shop' style={{textDecoration: 'none'}}> <button type='button' > Shop Now <FaArrowCircleRight /> </button></Link>
            <img src={Arrowd} alt=''/>
            <div className='review'>
                <span className='rating'><span className='rating-no'>4.9</span>|<span className='rating-stars'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span></span>
                <span className='review-text'>120k Total Review</span>
            </div>
        </div>
        <div className='main-shoe'>
            <img src={Greenshoe} alt=''/>
            <div className='discount-info'>
                <span className='info1'>Get upto 30% off</span>
                <span className='info2'>You can get up to 30 percent<br/>discount from here</span>
                
            </div>
        </div>
    </div>
  )
}

export default Header