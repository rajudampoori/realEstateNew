import React from 'react'
import { useState, useContext } from 'react'
import { LoginContext } from './ContextProvider/Context'
import userIcon from '../images/User_icon.png'
import './header.css'
import down from '../images/down.png'
import { useNavigate } from 'react-router-dom'

//
//const Header = () => {
const Header = () => {
  const navigate = useNavigate()
  const { logindata, setLoginData } = useContext(LoginContext)
  const logoutuser = async () => {
    let token = localStorage.getItem('usersdatatoken')

    const res = await fetch('/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        Accept: 'application/json'
      },
      credentials: 'include'
    })
    const data = await res.json()
    // console.log(data)

    if (data.status == 201) {
      //   console.log('use logout')
      localStorage.removeItem('usersdatatoken')
      setLoginData(false)
      navigate('/')
    } else {
      console.log('error')
    }
  }

  return (
    <div className='header-container'>
      <div className='header-id'>USER ID:{logindata
                ? logindata.ValidUserOne._id.slice(0,5).toUpperCase()
                : ''}</div>
      <div className='logout'>
        <img className='user' src={userIcon} alt='user' />

        <div className='username'>
          {
            <h1 style={{ fontSize: '20px' }}>
              {logindata
                ? logindata.ValidUserOne.email.slice(0, 5).toUpperCase()
                : ''}
            </h1>
          }
        </div>

        <img
          className='down'
          src={down}
          alt='data'
          onClick={() => {
            if (window.confirm('Do you want to logout.!?')) {
              logoutuser()
            }
          }}
        />
      </div>
    </div>
    // <div className='header-container'>
    //   {/* <div className='header-id'>USER ID: {'06PPD' + user.UserID} </div> */}
    //   <div className='logout'>
    //     <img className='user' src={userIcon} alt='user' />

    //     {/* <div className='username'>{'   ' + user.UserName}</div> */}

    //     <img
    //       className='down'
    //       src={down}
    //       alt='data'
    //       onClick={() => {
    //         if (window.confirm('Do you want to logout.!?')) {
    //           logoutuser()
    //         }
    //       }}
    //     />
    //   </div>
    // </div>
  )
}

export default Header
