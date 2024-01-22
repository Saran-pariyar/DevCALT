"use client"

import { useAppSelector } from '@/redux/store'
import React from 'react'

import { logOut } from '@/redux/features/auth-slice'
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useRouter } from "next/navigation"


const DashBoard = () => {

    const username = useAppSelector((state) => state.authReducer.value.username )

    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter()


    const onClickLogOut = () =>{
      dispatch(logOut())
      router.push("/")

    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-white'>Username: {username}</h1>
        <button onClick={onClickLogOut}>log out</button>
    </div>
  )
}

export default DashBoard