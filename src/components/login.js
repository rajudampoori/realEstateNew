import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../css/login.css'
import eye from '../images/eye.png'

function Signin ({ setUser, setToken }) {
  const [showPassword, setShowPassword] = useState(false)
  const [inpval, setInpval] = useState({
    email: '',
    password: ''
  })
  const history = useNavigate()
  const setVal = e => {
    const { name, value } = e.target
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }
  const loginuser = async e => {
    e.preventDefault()
    const { email, password } = inpval
    const data = await fetch('https://realestatenewbackend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const res = await data.json()
    if (res.status == 201) {
      localStorage.setItem('usersdatatoken', res.result.token)
      history('/list')
      alert("Login Successful")
    } else {
      alert(res.message)
      setInpval({ ...inpval, email: '', password: '' })
    }
  }

  return (
    <div className='sign-in-parent'>
      <div className='sign-in-form-container'>
        <h1 style={{ color: '#4c57b6' }}>Logo</h1>
        <p className='description'>Enter your credentials to access your Account</p>
        <form onSubmit={loginuser}>
          <input type='email' className='UserID' id='email' placeholder='Mail ID' name='email' value={inpval.email} required onChange={setVal}/>
          <input className='password' type={showPassword ? 'text' : 'password'} placeholder='Password' id='password' name='password' value={inpval.password} required  onChange={setVal}/>
          <span className='eye' onClick={() => { setShowPassword(!showPassword) }}>
            <img src={eye} alt='no data' />
          </span>
          <button type='submit' className='submit-button'> Sign in</button>
          <Link to='/Signup' style={{ fontWeight: 'bold' }}>
            <p id='signup'>SignUp</p>
          </Link>
        </form>
      </div>
      <div>
        <p className='para' style={{ color: '#4c57b6', marginLeft: '50px' }}>Don't have an account?
          <Link to='/Signup' style={{ fontWeight: 'bold' }}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Signin
