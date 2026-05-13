import Button from "../Button";
import ReviewCard from "../ReviewCard";
import reviewImg from "../../assets/images/review1.png";
import AglaonemaPlant from "../../assets/images/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png"
export default function HeroSections() {
  return (
    <section
      className="px-8 flex flex-col mt-11 lg:flex-row justify-between gap-7 ">
      {/* Left Content */}
      <div className="max-w-[650px] flex flex-col gap-6 mb-20">
        <h1 className="font-semibold text-3xl lg:text-8xl text-white/75 leading-tight">
          Earth’s Exhale
        </h1>

        <p className="font-medium text-white/75 text-lg lg:text-[22px] leading-relaxed">
          "Earth Exhale" symbolizes the purity and vitality of the
          Earth's natural environment and its essential role in
          sustaining life.
        </p>

        <div className="flex items-center gap-4">
          <Button
            className="px-6 py-4 rounded-xl border border-white text-white"
            name="Buy Now"
          />

          <div className="w-12 h-12 p-4 cursor-pointer 
    hover:text-black transition-all duration-500 rounded-full border-2 border-white">
            <div
  className="
    w-0
    h-0
    rotate-90
    border-l-[8px]
    border-r-[8px]
    border-b-[15px]
    border-l-transparent
    border-r-transparent
    border-b-white
    
  "
></div>
          </div>

          <p className="text-white/75 italic">
            Live demo...
          </p>
        </div>
          <ReviewCard
        img={reviewImg}
        name="Ronnie Hamill"
        star={4.5}
        review="I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
      />
      </div>

    <div
  className="
    w-80
    h-64
    px-4
    py-2
    relative
    backdrop-blur-[5px]
    bg-white/5
    rounded-[3rem]
    
    border-l
    border-r
    border-b
    border-white/30
  "
>
  {/* Curved Top Line */}


  {/* Plant Image */}
  <img
    className="
      w-80
      absolute
      -top-40
      right-2
      z-10
    "
    src={AglaonemaPlant}
    alt=""
  />

  {/* Content */}
  <div className="absolute bottom-6 left-6">
    
    <h3 className="text-white/75">
      Indoor Plant
    </h3>

    <h1 className="text-white text-2xl font-bold">
      Aglaonema plant
    </h1>

    <Button
      className="
        px-5
        py-3
        mt-3
        border
        border-white/75
        rounded-2xl 
      
      "
      name="Buy Now"
    />
  </div>
</div>
    
    </section>
  );
}