"use client"

import "./home.scss"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HomeComponent = () => {


  return (
    <section className='mx-8 my-8'>



<div className="hero-container border py-4">
        <h1 className='text-5xl font-bold py-4'>Join DevCALT and find your fellow dev!</h1>
        <p className="text-3xl my-9">Need a coding partner?</p>
        <div className="flex items-center justify-between w-full text-3xl my-9 py-5">
        <Link href={"/developers_list"} className="p-4  text-xl font-bold border rounded-xl transition-all duration-300 hover:bg-white hover:text-black"> View Devs list! </Link>
        <p className="text-3xl py-5 w-4/6">
        Want to create a full stack project but only know frontend or backend?
        </p>
        </div>
        <p className="text-3xl">Learn faster with a partner!</p>
        
        </div>
    </section>
  )
}

export default HomeComponent