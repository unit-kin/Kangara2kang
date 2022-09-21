import React from 'react'
import'./NavBar.css'

import Logo from '../images/nike-128.png'

import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'


const NavBar = () => {
  const [{cart, user}, dispatch] =useStateValue();

  const handleAuth = () =>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='NavBar'>
        <Link to='/'>
        <img src={Logo} alt=''/>
        </Link>
        
        <div className='nav-details'>
        
            <span>
              <Link to='/Shop' style={{textDecoration: 'none'}}>
                Shop
              </Link></span>
              <a href='#About'> 
            <span>About</span>
              </a>
            
              <a href='#About'>
            <span>Product</span>
              </a>
            
              <a href='#Reviews'>
            <span>Reviews</span>
            </a>

            <span onClick={handleAuth} style={{cursor:'pointer'}}>
              <Link to={!user &&'/Signup'} style={{textDecoration: 'none'}}>
                {user? 'Sign Out' : 'Sign In'}
              </Link></span>
            
        </div>
        <div className='btn-nav'>
        
            <button className='nav-icon'><AiOutlineSearch size={20}/></button>
            <button className='nav-icon'>
            <Link to='/Cart'>
            <AiOutlineShoppingCart size={20} style={{color:'white'}}/>
            </Link>
              
            <span> <strong>{cart?.length}</strong></span>
            </button>
            <a href='#Newsletter'>
            <button className='btn-ContactUs'> Contact Us</button>
            </a>
        </div>
    </div>
  )
}

export default NavBar