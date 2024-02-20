import Image from 'next/image'
import Link from "next/link"
import "../styles/style.scss"
import heroImg from "../img/hero1.jpg"
import HomeComponent from './home/page'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'DevCALT | Find your coding partner',
  description: 'With DevCALT, you can easily find a collaborator for your project or find a coding friend with whom you can learn and work like a team.',
}
export default function Home() {
  // connectMongoDB();
  return (
    <div className="    ">
{/* <Link href={'developers_list'}>View Devs</Link> */}
<HomeComponent />
    </div>
  )
}
