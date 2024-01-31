 "use client"

import "./home.scss"
// import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import connectMongoDB from "@/libs/mongodb"

const HomeComponent = async () => {

  await connectMongoDB()
  // console.log(connectMongoDB);

  return (
    <section className='hero-section'>



      <div className="hero-container ">
        <div className="hero-img" >

        
        <img src="/img/hero-bg.png" alt="" />
    </div>
    
      </div>

    </section>
  )
}

export default HomeComponent