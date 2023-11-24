

const Banner = ({setsearch}) => {
 const searchH =(e)=>{
  e.preventDefault()
  const searchV = e.target.searchname.value 
  const values =searchV.toLowerCase()
  setsearch(values)
 }
  return (
    <div className="">
    <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <form onSubmit={searchH} className="flex"><input name="searchname" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" />
    <button   className="btn btn-primary">Search</button></form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner