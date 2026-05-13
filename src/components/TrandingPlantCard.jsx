import Button from "./Button";
import bag from "../assets/images/bag.png";

export default function TrandingPlantCard({
  reverse,
  img,
  description,
  price,
}) {
  return (
    <div
      className={`
        w-full
        max-w-[1200px]
        min-h-[400px]
        rounded-[60px]
        lg:rounded-[100px]
        backdrop-blur-[5px]
        bg-white/5
        lg:h-[400px]
        h-[500px]
        px-6
        md:px-10
        lg:px-16
             min-[833px]:max-[1200px]:py-8
        py-10
        
        flex
        flex-col
       ${
  reverse
    ? "min-[833px]:max-[1200px]:flex-row-reverse lg:flex-row-reverse"
    : "min-[833px]:max-[1200px]:flex-row lg:flex-row"
}
        items-center
        justify-between
        gap-10
        relative 
        mix-[800px]
      `}
    >
      {/* Content */}
      <div className="max-w-[500px] lg:mt-0 mt-32      min-[833px]:max-[1200px]:mt-10 flex flex-col gap-4 z-10">
        
        <h1 className="text-white text-2xl lg:text-3xl md:text-4xl font-semibold leading-tight">
          For Your Desks Decorations
        </h1>

        <p className="text-white/70 text-sm md:text-md leading-8">
          {description}
        </p>

        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Rs. {price}/-
        </h2>

        <div className="flex gap-4">
          
          <Button
            className="
              px-5
              py-1
             lg:py-3
              rounded-xl
              border-2
              border-white
              text-white
            "
            name="Explore"
          />

          <div
            className="
              w-12
              lg:h-12
              h-10
              border-2
              border-white
              rounded-xl
              flex
              justify-center
              items-center
              cursor-pointer
            "
          >
            <img
              className="w-5"
              src={bag}
              alt="bag"
            />
          </div>
        </div>
      </div>

      {/* Plant Image */}
      <div
        className="
          
          w-full
          lg:w-[450px]
          h-[300px]
          lg:h-[400px]
          flex
          justify-center
          items-center
          flex-shrink-0 

        "
      >
        <img
          className="
            w-[250px]
            md:w-[340px]
            lg:w-[450px]
            object-contain
            absolute
            lg:-top-4 
            -top-20
            min-[833px]:max-[1200px]:top-3
            drop-shadow-2xl
          "
          src={img}
          alt="Plant"
        />
      </div>
    </div>
  );
}