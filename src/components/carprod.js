import React from 'react'
import Carousel from './Carousel'

import i from '../images/robin-davidson-oDnPch2Fu1U-unsplash.jpg'
import ii from '../images/oguz-yagiz-kara-TMKqJcbSqgM-unsplash.jpg'
import iii from '../images/dorji-tsering-84cgKwzPhKc-unsplash.jpg'
import iv from '../images/xavier-teo-SxAXphIPWeg-unsplash.jpg'
import v from '../images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg'

const Carprod = () => {
  return (
    <div className='wrapper'>
      <div className='overlay-blur4'></div>
      <div className='button-container'>
          <span className='bigspan'>
            <span className='span1'>Popular</span>
            <span className='span2'>Products</span>
          </span>

    </div>
    <div className='frame'>
      <div className='box-container' >
        
    <Carousel
       id ="1234"
       title ="Sketchers pro 5"
       price ={20.20}
       image={i}
       
       />
       <Carousel
       id ="rwfrv"
       title ="Sketchers pro 5"
       price ={20.20}
       image={ii}
       
       />
       <Carousel
       id ="5hnfgd"
       title ="Sketchers pro 5"
       price ={20.20}
       image={iii}

       />
    
      
      <Carousel
      id ="8r67w"
      title ="Sketchers pro 5"
      price ={20.20}
      image={iv}
      
      />
      <Carousel
      id ="13277"
      title ="Sketchers pro 5"
      price ={20.20}
      image={v}
      
      />
    </div>
    </div>
    </div>
    

    
  )
}

export default Carprod