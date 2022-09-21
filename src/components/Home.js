import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import Header from './Header'
import Carprod from './carprod'
import About from './About'
import Reviews from './Reviews'
import Newsletter from './Newsletter'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='Home'>
        <NavBar/>
        <Header/>
        <Carprod/>
        <About/>
        <Reviews/>
        <Newsletter/>
        <Footer/>
        
        

    </div>
  )
}

export default Home