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
      <Image
      // loader={imageLoader}
      src="/img/hero-bg.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </div>

    </section>
  )
}

export default HomeComponent