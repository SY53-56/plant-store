import React from "react";
import rosePlant from "../../assets/images/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6 (1).png";
import Button from "../Button";

export default function BestPlantSection() {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        justify-center
        items-center
        mt-24
        gap-16
        px-6
      "
    >
      {/* Heading */}
      <div className="flex items-center gap-10 relative">

        {/* Left Corner */}
        <div
          className="
            absolute
            -left-5
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

        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Customer Review
        </h1>

        {/* Right Corner */}
        <div
          className="
            absolute
            -right-5
            top-0
            w-10
            h-10
            border-r-4
            border-t-4
            rounded-tr-[20px]
            border-yellow-300/80
            opacity-70
          "
        ></div>
      </div>

      {/* Card */}
      <div
        className="
          w-full
          max-w-[1200px]
          min-h-[500px]
          rounded-[50px]
          lg:rounded-[92px]
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-10
          px-6
          md:px-10
          py-10
          relative
          backdrop-blur-[5px]
          bg-white/5
        "
      >
        {/* Plant Image */}
        <div
          className="
            relative
            w-full
            lg:w-[450px]
            h-[300px]
            lg:h-full
            flex
            justify-center
            flex-shrink-0
          "
        >
          <img
            src={rosePlant}
            className="
              w-[260px]
              md:w-[340px]
              lg:w-[420px]
              lg:absolute
              lg:-top-54
              object-contain
              drop-shadow-2xl
            "
            alt="O2 Plant"
          />
        </div>

        {/* Content */}
        <div className="max-w-[600px]">
          
          <h1
            className="
              text-white/75
              text-2xl
              md:text-4xl
              font-semibold
              leading-snug
            "
          >
            We Have Small And Best O2 Plants Collection’s
          </h1>

          <p
            className="
              text-white/75
              mt-4
              leading-7
              text-sm
              md:text-base
            "
          >
            Oxygen-producing plants, often referred to as
            "O2 plants," are those that release oxygen into
            the atmosphere through the process of photosynthesis.
          </p>

          <p
            className="
              text-white/75
              mt-6
              leading-7
              text-sm
              md:text-base
            "
          >
            Many plants can help filter out pollutants and toxins
            from the air, such as formaldehyde, benzene, and
            trichloroethylene. This makes the air cleaner and
            healthier to breathe.
          </p>

          <Button
            className="
              px-6
              py-3
              mt-8
              border
              border-white/75
              rounded-xl
              text-white
            "
            name="Explore"
          />
        </div>
      </div>
    </section>
  );
}