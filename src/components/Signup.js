import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import {auth} from '../firebase'


const Signup = () => {
    const navigate =useNavigate();
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const signUp= e =>{
        e.preventDefault();

        /* firebase SignUp code */
                auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) =>{
                    console.log(auth);
                    if (auth){
                        navigate('/')
                    }
                })
                .catch(error => alert(error.message))
        /* firebase SignUp code  */
    }
  return (
    <div className='Signup'>
        <div className='signup-cont'>
            <div className='signup-text'>
                <p><strong>SignUp</strong></p>
            </div>
            <div className='signup-form'>
                <form className='formm'>
                   {/*  <input type='text' placeholder='User Name'/> */}
                    <input type='email' placeholder='Email' value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                    <input type='password' placeholder ='Password' value={password} onChange=
                    {e => setPassword(e.target.value)}/>
                    
                    <button type='submit' onClick={signUp} >SignUp</button>
                </form>
            </div>
            <div className='for-In'>
                <span>Forgot Password?</span>
                <span>
                    <Link to='/SignIn'>
                    SignIn
                    </Link>
                   </span>
            </div>
            
        </div>
        
    </div>
  )
}

export default Signup