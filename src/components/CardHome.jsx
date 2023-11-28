
import { useState } from "react";
import { FaCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTan from "../hooks/useTan";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";



const CardHome = ({dataes}) => {
  
  const [datas,setdatas]=useState(dataes)
  const{data,refetch}=useTan()
// text for


console.log(data,'vote')
const difference = ()=>{
  setdatas(data)
  refetch()

}
  
  return (
   <div>
   <button onClick={difference} className="btn flex justify-center items-center mx-auto my-5 btn-outline text-center ">Popular base</button>
   <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] justify-center items-center pl-8 mx-auto">
   {
     datas?.map(item=> <div key={item._id}  className=" max-w-[350px] h-auto my-3 shadow-2xl bg-slate-100 rounded-lg p-3 "><Link to={`/card/${item._id}`}>
     <div className="flex pl-5 gap-1 p-2 justify-between items-center">
 
     <div className="avatar my-2">
     <div className="w-14 rounded-full">
       <img src={item.image} />
     </div>
     </div>
     
     <div>Time : {item.date}</div>
     
     
     </div>
 
     <h1 className="my-2 pl-5">Title : {item.title}</h1>
     <h1 className="my-2 pl-5 ">Tag : {item.tag}</h1>
     
 
     <div className=" flex flex-row" >
     
     {/** */}
     <div className="flex gap-6 mx-auto items-center" >
    <button  className="btn btn-accent"><BiSolidUpvote /> </button><h1 className="mx-2">{item.upvote}</h1>
    <button className="btn btn-accent"><BiSolidDownvote/> </button>
    <h1>{item?.downvote}</h1>
    <button className="btn btn-accent"><FaCommentAlt /> </button>
    <h>0</h>

    </div>
      
     </div>
 
 
 
     </Link>
 </div>)
   }

   </div>
   
   </div>
  )
}

export default CardHome