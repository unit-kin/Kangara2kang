import React from 'react'
import './Order.css'
import moment from 'moment'
import CartItem from './CartItem'

const Order = ({order}) => {
  return (
    <div className=' OOrder' >
        <h2 >Order</h2>
        <p>{moment.unix(order.data.created).format('MMM Do YYY, h:mma')}</p>
        <p className='order__id'>
            <small>{order.id}</small>
        </p>
        {order.data.cart?.map(item =>(
                <CartItem
                id={order.id}
                title={order.title}
                image={order.image}
                price={order.price}
                />
        ))}
        
    </div>
  )
}

export default Order