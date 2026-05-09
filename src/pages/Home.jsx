import React from 'react'
import Navbar from "../components/Navbar"
import HomeBg from "../assets/images/homeBg.png"
export default function Home() {
  return (
   <section  className="h-[250vh] w-full bg-cover bg-center bg-no-repeat" style={{
    backgroundImage:`url(${HomeBg})`
   }}>
    <Navbar/>
   </section>
  )
}
