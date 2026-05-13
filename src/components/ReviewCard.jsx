import { StarIcon } from "lucide-react";

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
        `
        rounded-4xl
        w-80
        p-6
        flex
        flex-col
        backdrop-blur-[5px]
        bg-white/5
        gap-4
        shadow-2xl
      `
      }
    >
      {/* Top */}
      <div className="flex items-center gap-3">
        
        <img
          className="
            w-14
            h-14
            rounded-full
            object-cover
          "
          loading="lazy"
          src={img}
          alt={name}
        />

        <div>
          
          <h2
            className="
              text-xl
              text-white/75
              font-semibold
            "
          >
            {name}
          </h2>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-1">

            {[1, 2, 3, 4, 5].map((item) => (
              <StarIcon
                key={item}
                size={16}
                className={
                  item <= star
                    ? "fill-yellow-400 text-yellow-400"
                    : item - 0.5 <= star
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "text-white/30"
                }
              />
            ))}

            <p className="text-white/75 text-sm ml-1">
              {star}
            </p>

          </div>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm text-white/75 leading-6">
        {review}
      </p>
    </div>
  );
}