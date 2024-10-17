import React from 'react'
import "./sign-in.scss"
import { Input } from '@/components/ui/input'

const SignIn = () => {
  return (
    <section className='sign-in-form-section form-section'>
      {/* <Input /> */}
      <form action="" className="sign-in-form">
        <div className="form-container">
          <div className="logo-and-text-section">
            <h1 className="logo">DevCALT</h1>
            <h3 className=''>Glad to have you back!</h3>
            <p className="sign-in-description">Sign in to DevCALT</p>
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">Email</label>
            <Input type="email" id="email" className="email-input" required />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">Password</label>
            <Input type="password" id="password" className="password-input" required />
          </div>
          <div className="remember-me-container">
            <input type="checkbox" id="remember-me" name="remember-me" className="checkbox" />
            <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
          </div>
          <button type="submit" className="submit-btn">Sign In</button>
        </div>

      </form>

    </section>
  )
}

export default SignIn