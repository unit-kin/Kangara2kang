import React from 'react'

import './Carousel.scss'

import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import{AiFillStar} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'

import { useStateValue } from './StateProvider'






const Carousel = ( {id, title, image, price , rating}) => {
  const [{cart}, dispatch] = useStateValue();
    console.log("This is the cart" ,cart);



    const addCart =()=>{
        /* dispatch item to cart */
        try {
          dispatch({
            type:'ADD_TO_CART',
            item:{
              id: id,
              title: title,
              image: image,
              price:price,
              rating: rating,
            }
          })
        } catch (error) {
         console.log(error) 
        }
        
    }


       
  


  
  return (

    

    
        <div>
          <div className='box'>
            <img src={image} alt=''/>
                <div className='like-btn'>
                    <span><FaRegHeart size={15}/></span>
                </div>
            
          </div>
          <div className='itemdet'>
            <div className='starat'>
                <span className='starcolor'><AiFillStar size={15}/></span>
                <span>(4.5)</span>
            </div>
            
            <p>{title}</p>
            <div className='amntadd'>
                <span>${price}</span>
                <button onClick={addCart}>Add to cart</button>
            </div>
            
          </div>
          <div className='overlay-blur3'></div>
        </div>
          
        
          
        
      
     
     
    
    
  )
  
}

export default Carousel