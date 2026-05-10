

export default function Button({name , onClick ,type="submit", className}) {
  return (
    <button onClick={onClick} type={type} className={`${className} cursor-pointer transition-all text-white/75 duration-500 `}>{name}</button>
  )
}
