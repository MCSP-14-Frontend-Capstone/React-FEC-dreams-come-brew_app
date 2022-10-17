import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      
      <h3>Sign up for our Newsletter. GET 25% Off!</h3>
      <form action="">
        <input className='news-input' type="email" placeholder='email' />
            <input className='news-sub' type="submit" />
      </form>
    </div>
  )
}

export default Newsletter