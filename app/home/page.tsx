//  "use client"

import "./home.scss"
import Link from "next/link"
import Image from 'next/image'
// import connectMongoDB from "@/libs/mongodb"

// const HomeComponent = async () => {
const HomeComponent = () => {

  // await connectMongoDB()
  // console.log(connectMongoDB);

  return (
    <section className='hero-section' id="hero">
      <div className="hero-container ">
        <div className="hero-text-container">
          <h1 className="hero-title">Welcome To DevCALT</h1>
          <h2 className="hero-second-title"> Want to create a full-stack project but only know frontend/backend or you want to learn to work with a team?
            <br /> Let&apos;s find a coding buddy for you with DevCALT!</h2>
          <div className="hero-btn-section">
            <Link href={"/developers_list"} className="hero-btn hero-btn-find">Find a partner</Link>
            <Link href={"/developers_list"} className="hero-btn hero-btn-about">Get started</Link>
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
      {/* ABOUT SECTION  */}
      <section className="get-started-section" id="get-started">
        <h2 className="get-started-title">Get started!</h2>
<h3 className="get-started-second-title">
Just follow this three steps and start using DevCALT to find your coding friend.
</h3>
<div className="cards-container">
        <article className="steps-card">
          <div className="card-step">Step 1</div>
          <h2 className="card-title">Sign Up</h2>
          <p className="card-description">Just click the sign up button above and create an account.</p>
        </article>
        <article className="steps-card">
          <div className="card-step">Step 2</div>
          <h2 className="card-title">Create a profile</h2>
          <p className="card-description">Create your profile. Fill all the necessary details about yourself. </p>
        </article>
        <article className="steps-card">
          <div className="card-step">Step 3</div>
          <h2 className="card-title">Create Devreq or search</h2>
          <p className="card-description">Now create a devreq to specify what kind of developer you're looking for or you can browse developers list and find your partner</p>
        </article>
        </div>
      </section>
      
    </section>
  )
}

export default HomeComponent