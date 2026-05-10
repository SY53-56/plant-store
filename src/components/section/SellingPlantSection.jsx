import React from 'react'
import topPlantSell from "../../data"
import PlantCard from '../PlantCard'
export default function SellingPlantSection() {
  return (
    <section className='px-20 py-16 flex flex-col justify-center'>
      <h1 className='text-4xl  text-white font-bold text-center'>Our Top Selling Plants</h1>
      <div className=' mt-32 gap-5 grid gap-y-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
   {   topPlantSell.length===0?(<p>there are no data</p>):(
    topPlantSell.map(data=> (
      <PlantCard data={data}/>
    ))
   )}
      </div>
    </section>
  )
}
