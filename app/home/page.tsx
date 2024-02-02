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

      {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L30,122.7C60,117,120,107,180,106.7C240,107,300,117,360,144C420,171,480,213,540,229.3C600,245,660,235,720,213.3C780,192,840,160,900,144C960,128,1020,128,1080,149.3C1140,171,1200,213,1260,224C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
    </section>
  )
}

export default HomeComponent