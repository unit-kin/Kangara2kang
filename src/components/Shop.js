import React from 'react'
import './Shop.css'

import Logo from '../images/nike-128.png'
import Blacklogo from '../images/blacklogo.png'
import i from '../images/robin-davidson-oDnPch2Fu1U-unsplash.jpg'
import ii from '../images/oguz-yagiz-kara-TMKqJcbSqgM-unsplash.jpg'
import iii from '../images/dorji-tsering-84cgKwzPhKc-unsplash.jpg'
import iv from '../images/xavier-teo-SxAXphIPWeg-unsplash.jpg'
import v from '../images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg'

import {AiOutlineSearch,AiOutlineShoppingCart,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'

import { Link } from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'



import Product from './Product'
import { useStateValue } from './StateProvider'

const NavBar = () => {
   const [{cart}, dispatch] = useStateValue();

  return (
    <div className='NavBar-shop' >
      <Link to='/' style={{textDecoration: 'none'}}>
      <img src={Logo} alt=''/>
              </Link>
        
        <div className='nav-details-shop'>
            <span>
              <Link to='/' style={{textDecoration: 'none'}}>
                Home
              </Link></span>
            <span>About</span>
            <span>Product</span>
            <span>Reviews</span>
            <span className='shop'>
              
              </span>
        </div>
        <div className='btn-nav'>
            <button className='nav-icon'><AiOutlineSearch size={20}/></button>
            <button className='nav-icon' >
            <Link to='/Cart'>
            <AiOutlineShoppingCart size={20} style={{color:'white'}}/>
            </Link>
            <span> <strong>{cart?.length}</strong></span>
            
            </button>
            <button className='btn-ContactUs'> Contact Us</button>
        </div>
    </div>
  )
}



const Body = () =>{
  return(
    <div className='Body'>
     <span style={{fontSize:'30px', padding:'77px'}}> <strong >Shop with Us</strong></span> 
      <div className='container1'>
       <Product 
       id ="1234"
       title ="Sketchers pro 5"
       price ={20.20}
       image={ii}
       rating ={5}
       />
       <Product
       id ="6e776"
       title ="Sketchers pro 5"
       price ={30.20}
       image={iv}
       rating ={5}
       />
       <Product
       id ="54769"
       title ="Sketchers pro 5"
       price ={40.20}
       image={v}
       rating ={5}
       />
      </div>
      <div className='container2'>
      <Product
      id ="8r67w"
      title ="Sketchers pro 5"
      price ={50.20}
      image={i}
      rating ={5}
      />
      <Product
      id ="13277"
      title ="Sketchers pro 5"
      price ={60.20}
      image={ii}
      rating ={5}
      />
      <Product
      id ="0987"
      title ="Sketchers pro 5"
      price ={70.20}
      image={v}
      rating ={5}
      />
      </div>
      <div className='container3'>
      <Product
      id ="234567"
      title ="Sketchers pro 5"
      price ={30.20}
      image={iv}
      rating ={5}
      />
      <Product
      id ="34567"
      title ="Sketchers pro 5"
      price ={40.20}
      image={i}
      rating ={5}
      />
      <Product
      id ="3437"
      title ="Sketchers pro 5"
      price ={50.20}
      image={v}
      rating ={5}
      />
      </div>
    </div>
  )
}


const Footer = () => {
  return (
    <div className='Footer'>
        <hr/>
        <div className='footer'>
            <div className='logo-text-social-shop'>
                <img src={Blacklogo} alt='' />
                <p style={{color:'black'}}>Lorem ipsum dolor sit amet<br/> at consectetur</p>
                <div className="social-icons">
                    <span style={{color:'white'}}><FaFacebook size={25}/></span>
                    <span style={{color:'white'}}><AiFillInstagram size={25}/></span>
                    <span style={{color:'white'}}><AiFillTwitterCircle size={25}/></span>
                </div>
            </div>
            <div className='help' >
                <p>Get Help</p>
                <ul>
                    <li style={{color:'black'}}>About Us</li>
                    <li style={{color:'black'}}>Contact Us</li>
                    <li style={{color:'black'}}>Return Policy</li>
                    <li style={{color:'black'}}>Privacy Policy</li>
                    <li style={{color:'black'}}> Payment Policy</li>
                </ul>
            </div>
            <div className='help'>
                <p>About Us</p>
                <ul>
                    <li style={{color:'black'}}>News</li>
                    <li style={{color:'black'}}>Service</li>
                    <li style={{color:'black'}}>Our Policy</li>
                    <li style={{color:'black'}}>Customer Care</li>
                    <li style={{color:'black'}}>Faq's</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='rights' style={{color:'black'}}>
            @ 2022 UnitKin. All rights reserved
        </div>
    </div>
  )
}

const Shop = () => {
  return (
    <div className='Shop'>
     <NavBar/>
     <Body/>
     <Footer/>
    </div>
  )
}

export default Shop