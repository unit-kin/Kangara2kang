import React from 'react'
import './CartItem.css'
import { useStateValue } from './StateProvider'

const CartItem = ({id, image, title, price,}) => {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = ()=>{
        /* remove item */
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
        })

    }
  return (
    <div className='item'>
                <div className='item-photo'>
                 <img src={image} alt=''/>
                </div>
                <div className='item-pdetails'>
                    <p className='idp1'>{title}</p>
                    <p style={{color:'gray'}}>36 EU --4 US</p>
                    <p><button className='p-btnnn' onClick={removeFromCart}>Remove Item</button></p>
                </div>
                <div className='amount-details'>
                    <span>{price}</span>
                </div>
    </div>
  )
}

export default CartItem