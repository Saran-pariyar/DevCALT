"use client"

import { useAppSelector } from '@/redux/store'
import React from 'react'
// import { useSelector } from 'react-redux'


const DashBoard = () => {

    const username = useAppSelector((state) => state.authReducer.value.username )

  return (
    <div>
        <h1 className='text-white'>Username: {username}</h1>
        <button>log out</button>
    </div>
  )
}

export default DashBoard