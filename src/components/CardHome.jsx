
import { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTan from "../hooks/useTan";



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
   <button onClick={difference} className="btn btn-outline ">Popular base</button>
   <div className="grid grid-cols-3 max-w-[1200px] mx-auto">
   {
     datas?.map(item=> <div key={item._id}  className=" max-w-[300px] h-auto my-10 shadow-2xl bg-red-200 p-1"><Link to={`/card/${item._id}`}>
     <div className="flex gap-1 justify-between items-center">
 
     <div className="avatar my-2">
     <div className="w-14 rounded-full">
       <img src={item.image} />
     </div>
     </div>
     <div> name:{item.name}</div>
     <div>time:{item.date}</div>
     
     
     </div>
 
     <h1 className="my-2">title:{item.title}</h1>
     <h1 className="my-2">tag:</h1>
     
 
     <div className=" flex flex-row" >
     <div>
     <button className="btn">
   Vote
   <div className="badge badge-secondary">{item.upvote}</div>
 </button>
     </div>
     {/** */}
     <div>
     <button className="btn">
     <FaCommentAlt />
   <div className="badge badge-secondary">+99</div>
 </button>
     
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