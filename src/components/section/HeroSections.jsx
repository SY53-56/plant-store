import Button from "../Button";
import ReviewCard from "../ReviewCard";
import reviewImg from "../../assets/images/review1.png";
import AglaonemaPlant from "../../assets/images/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png"
export default function HeroSections() {
  return (
    <section
      className="px-8 flex justify-between ">
      {/* Left Content */}
      <div className="max-w-[650px] flex flex-col gap-6">
        <h1 className="font-semibold text-5xl lg:text-8xl text-white/75 leading-tight">
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

          <div className="w-12 h-12 rounded-full border-2 border-white"></div>

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

     <div className="  w-80
  h-64
  px-4
  py-2
  relative
  border
  border-amber-50
  rounded-tl-[80px]
  rounded-tr-[20px]
  rounded-bl-[40px]
  rounded-br-[40px]
">
       <img className="w-80 absolute -top-40 right-2 " src={AglaonemaPlant} alt="" />
      <div className="absolute top-30 gap-1">
         <h3 className="text-white/75 ">Indoor Plant </h3>
       <h1 className="text-white/75 text-2xl font-bold">Aglaonema  plant</h1>
       <Button className="px-5 py-3 mt-2 border border-[white/75] rounded-2xl" name="Buy Now"/> 
      </div>
     </div>
    
    </section>
  );
}