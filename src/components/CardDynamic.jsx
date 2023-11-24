import { useState } from "react"
import { FaCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import axios from "axios";

const CardDynamic = ({data}) => {
 

  const [count,setcount]= useState(data.upvote)
  // test 
  const [counttow,setcounttow]=useState( data.upvote)

  console.log(count,'main')
  

  const handleI = ()=>{
    setcount(count+1)
    
    //  setcounttow(count)
     console.log(count,'handleI')
    const upvote ={upvote:count}
    axios.put(`http://localhost:3005/card/${data._id}`,upvote)
    .then(res => {
      console.log(res.data)
      if(res.data. modifiedCount&&count>0){
          setcounttow(count)
        
      }
      
      
    })
    
    
  }
  const handleD=()=>{
   if(count>0){
    setcount(count-1)
    // setcounttow(count-1)
    console.log(count,'data dd')
    const upvote ={upvote:count}

    axios.put(`http://localhost:3005/card/${data._id}`,upvote)
    .then(res => {
      console.log(res.data)
      if(res.data. modifiedCount&&count>0){
        setcounttow(count)
      
    }
    })


   
   }
  }

  return (
    <div>
    <div className=" max-w-[500px] h-auto my-10 shadow-2xl bg-red-200 p-5">
    <div className="flex gap-3 justify-between items-center">

    <div className="avatar my-2">
    <div className="w-14 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" />
    </div>
    </div>
    <div> name:</div>
    <div>timefajfa</div>
    
    
    </div>

    <h1 className="my-2">title:</h1>
    

    <div className="flex justify-evenly items-center" >
    <button onClick={handleI} className="btn btn-accent"><BiSolidUpvote /> </button><h1 className="mx-2">{counttow}</h1>
    <button onClick={handleD} className="btn btn-accent"><BiSolidDownvote/> </button>
    <button className="btn btn-accent"><FaCommentAlt /> </button>
    <button className="btn btn-accent"><FaRegShareSquare /></button>
    </div>
</div>
    
    </div>
  )
}

export default CardDynamic