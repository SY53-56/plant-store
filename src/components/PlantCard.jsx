
import bag from "../assets/images/bag.png"
export default function PlantCard({data}) {
  return (
    <div className="relative rounded-[77px] shadow-2xl   backdrop-blur-[5px]
            bg-white/5 w-84 h-[390px] border-2  border-none flex flex-col justify-center px-5 py-4">
   <img className="absolute h-72 -top-28 right-5" src={data.img} alt="plants img" />
   <h1 className="text-2xl mt-36 text-white/75 font-medium">{data.title}</h1>
   <p className=" text-white/75">{data.description}</p>
   <div className="flex justify-between">
    <h2 className="text-3xl text-white/75 font-medium">Rs. {data.price}/-</h2>
     <div className="w-10 border cursor-pointer border-white border-2 py-2 px-2 rounded-xl">
                <img className="w-6" src={bag} alt="bag" />
              </div>
   </div>
    </div> 
  )
}
