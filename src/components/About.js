import React from 'react'
import './About.css'

import Redshoe from '../images/Redshoe.png'
import Whiteshoe from '../images/whitshoe.png'
import {FaArrowCircleRight } from 'react-icons/fa'
import {MdPriceCheck,MdOutlineHighQuality} from 'react-icons/md'

const About = () => {
  return (
    <>
    
    <div className='About' id='About'>
     <div className='shoe-cont'>
        <img src={Redshoe} alt=''/>
        <div className='overlap-cont'>
            <span className='overlap-span'>Get up to <br/>30% off</span>
            <p>You can get upto 30<br />percent discount on store</p>
        </div>
        
     </div>
     <div className='About-info'>
            <p style={{color:'#ff6452'}} className='P1'>About Us</p>
            <p className='P2'>We Provide <span style={{color:'#ff6452'}}>High</span><br/> Quality Shoes.</p>
            <p className='P3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <button>Explore More <FaArrowCircleRight /> </button>
        </div>
        <div className='overlay-blur1'></div>
    </div>
    <div className='overlay-blur2'></div>
    <div className='product-details'>
    <div className='Product-info'>
        
            <p style={{color:'#ff6452'}} className='P1'>Product Details</p>
            <p className='P2'>Get to Know Our<br/> Feature <span style={{color:'#ff6452'}}>Product</span></p>
            <p className='P3'>Lorem Ipsum is simply dummy text of 
            <br/>It was popularised in the 1960s with the release of Letraset sheets </p>
            <div className='quality-price'>
                <div className='quality'>
                    <div className='quality-icon'>
                        <MdOutlineHighQuality size={40}/>
                    </div>
                    <div className='q-details'>
                        <p className='p-bold'>Best Quality Shoes</p>
                        <p className='P4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's</p>
                    </div>
                    
                </div>
                <div className='Price'>
                    <div className='quality-icon'>
                        <MdPriceCheck size={40}/>
                    </div>
                    <div className='p-details'>
                        <p className='p-bold'>Best Pricing Shoes</p>
                        <p className='P5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's</p>
                    </div>

                </div>
            </div>
            
        </div>
        <iv className='shoe-cont2'>
        <img src={Whiteshoe} alt=''/>
        </iv>
        


    </div>
    </>
  )
}

export default About