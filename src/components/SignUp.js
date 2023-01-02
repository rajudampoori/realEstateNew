import React from 'react'
import { useState } from 'react'
import '../css/signup.css'
import eye from '../images/eye.png'

import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
    cpassword: ''
  })
  const history = useNavigate()

  const setVal = e => {
    // console.log(e.target.value)
    const { name, value } = e.target

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addUserdata = async e => {
    e.preventDefault()

    const { email, password, cpassword } = inpval

    // console.log("user registration succesfully done");

    if (email === '') {
      alert('please provide email')
    } else if (!email.includes('@')) {
      alert('please provide valid email')
    } else if (password === '') {
      alert('please provide password')
    } else if (password.length < 6) {
      alert('Length of password must be of min 6 char')
    } else if (cpassword === '') {
      alert('please confirm password')
    } else if (cpassword.length < 6) {
      alert('Length of Confirm password must be of min 6 char')
    } else if (password !== cpassword) {
      alert('Passwords Do Not Match')
    } else {
      const data = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          cpassword
        })
      })

      const res = await data.json()

      if (res.status == 201) {
        alert('Registration successfull')
        history('/')
        setInpval({ ...inpval, email: '', password: '', cpassword: '' })
        console.log(res)
      } else {
        alert(res.message)

        setInpval({ ...inpval, email: '', password: '' })
      }
    }
  }

  return (
    <div className='sign-up-parent'>
      <div className='sign-up-form-container'>
        <h1 style={{ color: '#4c57b6' }}>Logo</h1>
        <p>Create New Account</p>
        <form>
          <input
            type='email'
            className='UserID'
            id='email'
            placeholder='Mail ID'
            name='email'
            value={inpval.email}
            required
            onChange={setVal}
          />

          <input
            className='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            name='password'
            value={inpval.password}
            onChange={setVal}
            required
          />
          <span
            className='eye'
            onClick={() => {
              setShowPassword(!showPassword)
            }}
          >
            <img src={eye} alt='no data' />
          </span>

          <input
            className='confirm-password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            name='cpassword'
            value={inpval.cpassword}
            required
            onChange={setVal}
          />
          <span
            className='eye'
            onClick={() => {
              setShowPassword(!showPassword)
            }}
            style={{ marginTop: '65px' }}
          >
            <img src={eye} alt='no data' />
          </span>
          <button type='submit' className='submit-button' onClick={addUserdata}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
