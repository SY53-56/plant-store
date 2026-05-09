import React from 'react'
import TrandingPlantCard from '../TrandingPlantCard'
import Plantain from "../../assets/images/Plantain Lilies.png"
import alovera from "../../assets/images/alovera.png"
export default function TrandingPlantSection() {
  return (
  <section className="mt-24 flex flex-col items-center gap-22">

      <h1 className="text-5xl font-bold text-white text-center">
        Our Trendy Plants
      </h1>

      <TrandingPlantCard
     reverse
        img={Plantain}
        description="
          I recently added a beautiful desk decoration
          plant to my workspace, and it has made such
          a positive difference!
        "
        price="599"
      />

      <TrandingPlantCard
        img={alovera}
        description="
          I recently added a beautiful desk decoration
          plant to my workspace, and it has made such
          a positive difference!
        "
        price="599"
      />

    </section>
  )
}
