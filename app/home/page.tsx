//  "use client"

import "./home.scss"
import Link from "next/link"
import Image from 'next/image'
// import connectMongoDB from "@/libs/mongodb"

// const HomeComponent = async () => {
  const HomeComponent =  () => {

  // await connectMongoDB()
  // console.log(connectMongoDB);

  return (
    <section className='hero-section'>



      <div className="hero-container ">
        <div className="hero-text-container">
          <h1 className="hero-title">Welcome To DevCALT</h1>
          <h2 className="hero-second-title"> Want to create a full-stack project but only know frontend/backend or you want to learn to work with a team?
          <br /> Let&apos;s find a coding buddy for you with DevCALT!</h2>
          <div className="hero-btn-section">
            <Link href={"/developers_list"} className="hero-btn hero-btn-find">Find a partner</Link>
            <Link href={"/developers_list"} className="hero-btn hero-btn-about">About Us</Link>
          </div>
        </div>
        <div className="hero-img-container" >

        
        {/* <img src="/img/hero-bg.png" alt="Hero image" className="hero-img" /> */}
        <Image
      src="/img/hero-bg.png"
      width={500}
      height={500}
      priority={true}
      alt="Hero image"
      className="hero-img"
      
   />
    </div>
    
      </div>

    </section>
  )
}

export default HomeComponent