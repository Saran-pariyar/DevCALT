"use client"

import "./home.scss"
import { Button } from "@/components/ui/button"
import { logIn, logOut } from '@/redux/features/auth-slice'
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"

const HomeComponent = () => {

const dispatch = useDispatch<AppDispatch>();

  return (
    <section className='mx-8 my-8 text-center'>
        <h1 className='text-4xl font-bold'>Join DevCALT and find your fellow dev!</h1>
        <p>Need a coding partner?</p>
        <div>
        <Button>View Devs list!</Button>
        <p>
        Want to create a full stack project but only know frontend or backend?
        </p>
        <p>Learn faster with a partner!</p>
        </div>

    </section>
  )
}

export default HomeComponent