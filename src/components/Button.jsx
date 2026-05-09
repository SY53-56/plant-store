

export default function Button({name , onClick , className}) {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer transition-all text-white/75 duration-500 `}>{name}</button>
  )
}
