import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import NavBar from './NavBar';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getCartTotal} from './reducer'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from './axios';
import {db} from '../firebase'




const Payment = () => {
    const navigate= useNavigate();
    const[{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements =useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] =useState(null);
    const [clientSecret, setClientSecret] = useState();


    useEffect(() =>{
        /* generate the stripe secret that
         allows us to charge a customer */
        
         const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
         }

         getClientSecret();
    }, [cart])

    console.log('THe secret is ', clientSecret)
    const handleSubmit =async (event) =>{
        /* stripe */
        event.preventDefault();
        setProcessing(true);
        /* client secret */
        const payload = await stripe.confirmCardPayment(clientSecret,{
            Payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then (({paymentIntent}) =>{
            /* paymentIntent= payment confirmation */
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart:cart,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })
         
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            
            dispatch({
                type:'EMPTY_CART'
            })
           /*  ('/Orders') */
        })

    }
    const handleChange = event =>{
        /* check for error in the card element */
        setDisabled(event.empty);
        setError (event.error ? event.error.message : '');
    }

  return (
    <div className='Payment'>
        <NavBar/>
      <div className='Payment-cont'>
        <div className='Order-Summary'>
            <p>
                Order Summary
            </p>
        </div>
        <hr></hr>
        <div className='delivery-Address'>
            <h3>Delivery Address</h3>
            <div className='payment-address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Mountain View,Nairobi</p>
            </div>
        </div>
        <hr></hr>
        <div className='review-items'>
           <h3>Review items and delivery</h3>
           <div className='payment-items'>
            {cart.map(item => (
                <CartItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                />
            ))}
           </div>
        </div>
        <hr></hr>
        <div className='payment-section'>
            <h3>Payment Method</h3>
            <div className='payment-details'>
                <form onSubmit={handleSubmit}>
                <div className='payment-price'>
                    <CurrencyFormat
                    renderText={(value) =>(
                    <>
                    <h3>Order Total: {value}</h3>
                    </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType='text'
                    thousandSeparator={true}
                    prefix={"$"}
                    />
                    </div>
                    <CardElement onChange={handleChange}/>

                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>processing</p>: 'Buy Now'}</span>
                    </button>

                    {error && <div>{error}</div>}
                </form>
            </div>  
 
        </div>

      </div>
    </div>
  )
}

export default Payment