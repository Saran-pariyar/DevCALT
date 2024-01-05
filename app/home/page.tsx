import React from 'react'
import "./home.scss"
import { Button } from "@/components/ui/button"

const HomeComponent = () => {
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