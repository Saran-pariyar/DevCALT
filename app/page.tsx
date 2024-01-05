import Image from 'next/image'
import Link from "next/link"
import "../styles/style.scss"
import heroImg from "../img/hero1.jpg"
import HomeComponent from './home/page'
export default function Home() {
  return (
    <div className="    ">
{/* <Link href={'developers_list'}>View Devs</Link> */}
<HomeComponent />
    </div>
  )
}
