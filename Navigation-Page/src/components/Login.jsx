import React from 'react'
import './Login.css'

const Login =() =>{
  return (
    <div className='login-container'>
        <div className="login-form">
            <h2>Login</h2>
            <form action="">
                <div className="form-group">
                    <label htmlFor="email" className="email">Email:</label>
                    <input type="email" id='email' name='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password:</label>
                    <input type="password" id='password' name='password' />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Re-Password:</label>
                    <input type="password" id='password' name='password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login