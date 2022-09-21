import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'
import {auth} from '../firebase'
const SignIn = () => {
    const navigate =useNavigate();
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const signIn= e =>{
        e.preventDefault();

        /* firebase login code */
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
                navigate('/')
            
        })
        .catch(error => alert(error.message))
        /* firebase login code  */
    }
  return (
    <div className='SignIn'>
        <div className='signIn-cont'>
            <div className='signIn-text'>
                <p><strong>Log In</strong></p>
            </div>
            <div className='signIn-form'>
                <form className='formm'>
                    <input type='email' placeholder='Email' value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                    <input type='password' placeholder ='Password' value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}>SignIn</button>
                </form>
            </div>
            <div className='for-In'>
                <span>Forgot Password?</span>
                <span>
                <Link to='/Signup'>
                    SignUp
                    </Link>
                </span>
            </div>
            
        </div>
        
    </div>
  )
}

export default SignIn