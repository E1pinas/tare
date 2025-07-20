export const Input =({type, value, onChange, placeholder})=>{
  return (
    <input className="border-2" type={type} value={value} onChange={onChange} placeholder={placeholder} />
  )
}