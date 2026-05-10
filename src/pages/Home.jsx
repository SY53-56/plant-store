import React from 'react'
import Navbar from "../components/Navbar"
import HomeBg from "../assets/images/homeBg.png"
import HeroSections from '../components/section/HeroSections'
import TrandingPlantCard from '../components/TrandingPlantCard'
import TrandingPlantSection from '../components/section/TrandingPlantSection'
import SellingPlantSection from '../components/section/SellingPlantSection'
import Footer from '../components/Footer'
export default function Home() {
  return (
   <section >
  <div  className="h-[260vh] w-full  bg-cover bg-center bg-no-repeat" style={{
    backgroundImage:`url(${HomeBg})`
   }}>
      <Navbar/>
    <HeroSections/>
   <TrandingPlantSection/>
  </div>
 <div className='bg-[#1B2316] '>
    <SellingPlantSection/>
   <Footer/>
 </div>
   </section>
  )
}
