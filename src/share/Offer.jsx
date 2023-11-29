import { useEffect, useState } from "react"

// https://learn-server-six.vercel.app/tag
const Offer = () => {
    const[ datas,setdatas] =useState([])
    useEffect(()=>{
        fetch('https://learn-server-six.vercel.app/tag')
        .then(res=> res.json())
        .then(data => setdatas(data))
    },[])
    console.log(datas)
  return (
    <div className="max-w-1200px mx-auto h-auto flex justify-center my-16 ">

<div>
<div className="card w-auto lg:w-[700px] lg:min-h-[300px] bg-base-100 shadow-2xl  ">
  <div className=" ">
    <h2 className="card-title justify-center my-6">SEARCH THIS TAGS</h2>
    
    
   <div className="grid grid-cols-3 p-5 gap-7 justify-center items-center">
   {
    datas?.map(item =><button key={item._id} className="btn btn-outline btn-sm ">{item.tag}</button> )
}
   </div>
    
  </div>
</div>

</div>

    </div>
  )
}

export default Offer