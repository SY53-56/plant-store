import React from "react";
import {plantReview} from "../../data"
import ReviewCard from "../ReviewCard";
export default function CustomerReviewSection() {
  return (
    <section className="w-full flex flex-col  justify-center items-center mt-24 gap-16">

      <div className="flex items-center gap-10 relative">

        {/* Left Corner */}
        <div
          className="
             absolute
            -left-3
            top-2
            w-10
            h-10
            border-l-4
            border-b-4
            rounded-bl-[20px]
            border-yellow-300
            opacity-70
          "
        ></div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white">
          Customer Review
        </h1>

        {/* Right Corner */}
        <div
          className="
            w-10
            h-10
            absolute
            -right-3
            border-r-4
            border-t-4
            rounded-tr-[20px]
            border-yellow-300/80
            opacity-70
          "
          
        ></div>
         </div>
  <div className="grid sm:grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-16">
  {plantReview.length ===0?(<p>there is no data</p>):(
    plantReview.map(data=>(
        <ReviewCard key={data} img={data.img} name={data.name} review={data.review} star={data.star}/>
    ))
  )}
  </div>
     

    </section>
  );
}