import React from 'react'
import './Cart.css'

import CurrencyFormat from 'react-currency-format'


import Logo from '../images/nike-128.png'
import Redshoe from '../images/Redshoe.png'

import {AiOutlineSearch,AiOutlineShoppingCart,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {getCartTotal} from './reducer'

import CartItem from './CartItem'

const NavBar = () => {
    return (
      <div className='NavBar-shop' >
        <span>
                <Link to='/'>
                <img src={Logo} alt=''/>
                </Link></span>
          
          <div className='nav-details-shop'>
              <span>
                <Link to='/'>
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
              
              </button>
              <button className='btn-ContactUs'> Contact Us</button>
          </div>
      </div>
    )
  }

const shipping = 12
const Cart = () => {
    const navigate =useNavigate();
    const [{cart, user}, dispatch] = useStateValue();
  return (
    <>
    <NavBar/>
    <div className="Cart">
        <div className='title'>
          <p>Hello, {user?.email}</p>
        YOUR CART ITEMS
        </div>
        
        <div className='cart-items'>
            {cart.map(item =>(
                <CartItem
                id ={item.id}
                title ={item.title}
                image ={item.image}
                price ={item.price}
                />
            ))}
            


            <hr className='hr'></hr>

            <div className='subtotal'>
                


                <CurrencyFormat
                renderText={(value) =>(
                <>
                <span style={{color:'gray'}}>Subtotal ({cart?.length} items)</span>
                <span>{value}</span>
                </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType='text'
                thousandSeparator={true}
                prefix={"$"}
                />
            </div>
            <div className='shipping'>
                <span style={{color:'gray'}}>Shipping</span>
                <span>(Not Included) $12.00</span>
            </div>

            <hr className='hr'></hr>

            <div className='Total'>
            <span >Total</span>
            <CurrencyFormat
                renderText={(value) =>(
                <>
                <span><span style={{color:'gray'}}><small>DOLLAR</small></span>{value }</span>
                </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType='text'
                thousandSeparator={true}
                prefix={"$"}
                />
                
            </div>
            <button className='cart-button' 
            onClick={e => navigate('/Payment')}>
                Place Order
            </button>
        </div>
    </div>
    </>
  )
}

export default Cart