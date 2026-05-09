import Button from "./Button";
import bag from "../assets/images/bag.png"
export default function TrandingPlantCard({ reverse,
  img,
  description,
  price,
  className,
}) {
  return (
    <div
      className={
        className ||
        `
        w-[1200px]
     

        
        rounded-[100px] 
         backdrop-blur-[5px]
            bg-white/5
        px-16
        py-10
        flex
        items-center
        justify-between
        relative   ${reverse ? "flex-row-reverse" : ""}
      `
      }
    >
      {/* Left Content */}
      <div className="max-w-[500px] flex flex-col gap-4 z-10">
        
        <h1 className="text-white text-4xl font-semibold leading-tight">
      For Your Desks Decorations
        </h1>

        <p className="text-white/70 text-md leading-8">
          {description}
        </p>

        <h2 className="text-white text-4xl font-bold">
          Rs. {price}/-
        </h2>

        <div className="flex gap-4">
          <Button
            className="
              px-4
              py-2
              rounded-xl
              border
              border-white
              text-white
              border-2
            "
            name="Explore"
          /> 
          <div className="w-10 border cursor-pointer border-white border-2 py-2 px-2 rounded-xl">
            <img className="w-6" src={bag} alt="bag" />
          </div>
        </div>
      </div>

      {/* Right Plant Image */}
      <div className="relative w-[450px] h-full">
        <img
          className="
            absolute
            -top-72
            right-0
            w-[450px]
            object-contain
            drop-shadow-2xl
          "
          src={img}
          alt="Plant"
        />
      </div>
    </div>
  );
}