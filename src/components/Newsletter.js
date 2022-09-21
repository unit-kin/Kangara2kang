import React from 'react'


import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="Newsletter" id='Newsletter'>
      <div className='overlay-blur7'></div>
        <div className='news-text'>
            <p>Sign Up for <span style={{ color: '#ff6452' }}>Updates</span><br/>& Newsletter</p>
        </div>
        <div className="news-form">
            <form className='form'>
                <div className='overlay'>
                <input type='email' placeholder='Type Your Email'/>
                <button>Subscribe Now</button>
                </div>
            </form>
        </div>


    </div>
  )
}

export default Newsletter