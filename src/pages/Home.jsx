import React from 'react'
import Navbar from "../components/Navbar"
import HomeBg from "../assets/images/homeBg.png"
import HeroSections from '../components/section/HeroSections'
import TrandingPlantCard from '../components/TrandingPlantCard'
import TrandingPlantSection from '../components/section/TrandingPlantSection'
export default function Home() {
  return (
   <section  className="h-auto w-full  bg-cover bg-center bg-no-repeat" style={{
    backgroundImage:`url(${HomeBg})`
   }}>
    <Navbar/>
    <HeroSections/>
   <TrandingPlantSection/>
   </section>
  )
}
