"use client"

import "./home.scss"
// import { Button } from "@/components/ui/button"
import Link from "next/link"

const HomeComponent = () => {


  return (
    <section className='hero-section'>



<div className="hero-container py-4">
        <h1 className='hero-title'>Join DevCALT and find your fellow dev!</h1>
        <p className="">Need a coding partner?</p>
        <div className="">
        <Link href={"/developers_list"} className=""> View Devs list! </Link>
        <p className="">
        Want to create a full stack project but only know frontend or backend?
        </p>
        </div>
        <p className="">Learn faster with a partner!</p>
        </div>

<div className="about-us-section">
  <h2 className="about-us-title">About Us</h2>
  <p className="about-text">
  The main goal of DevCALT is to connect developers with each other who are looking for a partner to collaborate with so they can create things that they imagined without having knowledge barrier. <br /><br />

I myself as a frontend developer, I had a project idea but need a backend developer who can handle the backend part for the project as I work on the frontend so that I can create project without any barrier and I can learn to work with a partner on a same project but it is hard to find a partner.
<br /><br />
DevCALT is here to solve that problem, you just have to post about what kind of developer partner you’re looking for and then they will find you and can reach out to you through social media.
  </p>
  <div className="about-img-container">
    <img src="" alt="" />
  </div>
</div>

    </section>
  )
}

export default HomeComponent