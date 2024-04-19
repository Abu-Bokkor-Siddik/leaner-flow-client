import { useEffect, useState } from "react"




const Banner = ({setsearch}) => {
  const [times,settimes]=useState(new Date())
 const searchH =(e)=>{
  e.preventDefault()
  const searchV = e.target.searchname.value 
  const values =searchV.toLowerCase()
  setsearch(values)
 }
 useEffect(()=>{
  setInterval(()=>settimes(new Date()),1000)
},[])
  return (
    <div className="  ">
      {/* update max  */}
    <div className="hero   " >
      
  
  
  
{/* st */}
<div className="hero min-h-[800px] ">
  {/* div */}
  
  <div className="hero-content relative  z-10  lg:w-auto text-center text-neutral-content ">
  
    <div className="absolute shadow-lg z-10 lg:shadow-none h-28 w-80 lg:h-auto lg:w-auto  rounded-md -top-[360px]  lg:-top-80">
    <p className="  font-bold text-black my-2  text-xl lg:mb-20 lg:text-5xl">
    What Type ?
  </p>
    <form onSubmit={searchH}  className="flex ml-14 z-10  lg:min-w-[800px]"><input name="searchname" type="text" placeholder="Type here" className="input input-bordered text-black relative shadow-transparent rounded-full h-10 lg:h-16  lg:w-[800px]   " />
    <button   className="  btn btn-sm lg:btn-md z-0  right-10 top-10  flex my-auto mx-3 absolute  lg:right-3 lg:top-[137px] mt-2  bg-[#79d0e3]">Search</button></form>
    {/* <p className=" text-3xl absolute right-16 top-[600px]">Time : {times.toLocaleTimeString()}</p> */}
    </div>
    
  </div>
  {/* end */}
  <div className="hero-content z-0    lg:-mb-96 lg:gap-40 flex-col lg:-mt-48 lg:flex-row-reverse lg:px-14">
    <img src="https://i.ibb.co/2knmxtb/reputation-management-small-business.jpg" className="lg:max-w-sm rounded-lg shadow-2xl mt-10 w-auto " />
    <div>
      <h1 className=" text-2xl lg:text-4xl font-bold">Post for help!</h1>
      <p className="lg:py-6">A forum site is an online platform for discussions and information sharing. Users engage in conversations, ask questions, and connect with others  who share similar interests. Features like categories, threads, and moderation  tools ensure a productive and respectful community environment.</p>
      <button className="btn btn-md bg-[#79d0e3] text-black">Get Started</button>
    </div>
  </div>
</div>
  
    {/* end */}
</div>


    </div>
  )
}

export default Banner