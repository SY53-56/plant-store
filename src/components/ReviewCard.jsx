export default function ReviewCard({
  img,
  name,
  star,
  review,
  className,
}) {
  return (
    <div
      className={
        className ||
        "rounded-4xl  w-80 p-6 flex flex-col backdrop-blur-[5px] bg-white/5 gap-4  shadow-xl"
      }
    >
      <div className="flex items-center gap-2 ">
        <img
          className="w-14 h-14 block rounded-full object-cover"
          src={img}
          alt={name}
        />

        <div>
          <h2 className="text-xl text-white/75 font-semibold">
            {name}
          </h2>

          <p>{star} ⭐</p>
        </div>
      </div>

      <p className="text-sm  text-white/75 leading-6">
        {review}
      </p>
    </div>
  );
}
