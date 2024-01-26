"use client"

import "./home.scss"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HomeComponent = () => {


  return (
    <section className='mx-8 my-8'>



<div className="hero-container">
        <h1 className='text-5xl font-bold'>Join DevCALT and find your fellow dev!</h1>
        <p className="text-3xl">Need a coding partner?</p>
        <div className="flex items-center justify-between w-full my-5 text-3xl">
        <Button className="text-3xl hover:text-black"><Link href={"/developers_list"} className="px-5"> View Devs list! </Link></Button>
        <p className="text-3xl">
        Want to create a full stack project but only know frontend or backend?
        </p>
        </div>
        <p className="text-3xl">Learn faster with a partner!</p>
        
        </div>
    </section>
  )
}

export default HomeComponent