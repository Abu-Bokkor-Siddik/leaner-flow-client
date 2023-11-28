import { useEffect, useState } from "react"

// http://localhost:3005/tag
const Offer = () => {
    const[ datas,setdatas] =useState([])
    useEffect(()=>{
        fetch('http://localhost:3005/tag')
        .then(res=> res.json())
        .then(data => setdatas(data))
    },[])
    console.log(datas)
  return (
    <div className="max-w-1200px mx-auto h-auto flex justify-center my-16 ">

<div>
<div className="card w-[700px] bg-base-100 shadow-2xl  ">
  <div className=" ">
    <h2 className="card-title justify-center my-6">SEARCH THIS TAGS</h2>
    
    
   <div className="grid grid-cols-4 gap-7">
   {
    datas?.map(item =><button key={item._id} className="btn btn-primary ">{item.tag}</button> )
}
   </div>
    
  </div>
</div>

</div>

    </div>
  )
}

export default Offer