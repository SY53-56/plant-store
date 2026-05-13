

export default function Button({name , onClick ,type="submit", className}) {
  return (
    <button onClick={onClick} type={type} className={`${className} cursor-pointer   hover:bg-white/70
        hover:text-black transition-all text-white/75 duration-500 `}>{name}</button>
  )
}
