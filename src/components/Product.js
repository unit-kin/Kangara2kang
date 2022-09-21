import React from 'react'
import './Product.css'


import{AiFillStar} from 'react-icons/ai'
import { useStateValue } from './StateProvider'


const Product = ( {id, title, image , price , rating}) => {

    
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
    <div className='shop-product'>
      <div className='product-card'>
       <p className='product-name'>{title}</p>
       <img src={image} alt=''/>
       <div className='starat'>
            <span className='starcolor'>
              {Array(rating)
              .fill().map((_, i) =>(
                  <AiFillStar size={15}/>
              ))}
              </span>
            <span>(4.5)</span>
        </div>
        <div className='amntaddtocart'>
            <span><small>$</small>{price}</span>
            <button onClick={addCart}>Add to cart</button>
        </div>

      </div>
    </div>
  )
}

export default Product