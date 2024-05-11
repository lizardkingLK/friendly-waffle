
const TextField = ({type="text", placeholder="🔎 Search Images...", className='p-2 rounded-2xl outline-none'}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} />
  )
}

export default TextField