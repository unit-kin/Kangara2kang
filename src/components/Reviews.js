import React, {useEffect,useState,useRef} from 'react'
import './Reviews.scss'


import{AiFillStar} from 'react-icons/ai'

import guy from '../images/guy.jpg'
import lady from '../images/lady.jpg'








const Reviews = () => {
   
  return (
    <div className='wrapper' id='Reviews'>
      <div className='overlay-blur8'></div>
      <div className='button-container'>
        <span className='bigspan2'>
            <span className='span1'>What Our</span>
            <span className='span2'>Customers Say</span>
        </span>

      </div>
      <div className='frame'>
        <div className='box-container2' >
        
          <div className='box2'>
                <div className='avatar'>
                    <img src={guy} alt=''/>
                </div>
                <div className='reviews'>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  </p>
                </div>
                <div className='reviewdet'>
                  <div className='starat'>
                      <span className='starcolor'><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/></span>
                  </div>
                  <p>Mohammed Salah</p>
                </div>
          </div>

          <div className='box2'>
                <div className='avatar'>
                <img src={lady} alt=''/>
                </div>
                <div className='reviews'>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  </p>
                </div>
                <div className='reviewdet'>
                  <div className='starat'>
                      <span className='starcolor'><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/><AiFillStar size={15}/></span>
                  </div>
                  <p>Kara Belling</p>
                </div>
          </div>

          
          
        </div>
      </div>
      
      
    </div>
  )
  
}


export default Reviews