import React, {useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import Cart from './components/Cart';
import Orders from './components/Orders';
import {auth} from './firebase'
import { useStateValue } from './components/StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51LjgXCLWwrjEyOhrbdwOd9jWXUc1MqAMWXOUKHMhB92DdTojH21f3cF0DmFkwOz2ZLkC0gcrrxsyatNqNV03bmaP00kKlJf5xK');

function App() {

  const [{}, dispatch] = useStateValue();



  useEffect(() =>{

   auth.onAuthStateChanged(authUser => {
    console.log('user is ', authUser)

    if (authUser){
      /* user is logged in  */
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }else {
      /* user is logged out */
      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
   })
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='Shop' element={<Shop/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='SignIn' element={<SignIn/>}/>
      <Route path='Payment' 
      element=
      {<Elements stripe={promise}>
        <Payment/>
       </Elements>}
       />
       <Route path='Orders' element={<Orders/>}/>
      <Route path='Cart' element={<Cart/>}/>

    </Routes>
  );
}

export default App;
