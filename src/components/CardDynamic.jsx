import { useState } from "react"
import { FaCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const CardDynamic = ({data,datas,refetch}) => {
 

// up 
  const [count,setcount]= useState(data.upvote)
  // test 
  const [counttow,setcounttow]=useState( data.upvote)

  console.log(count,'main')
  // down functionality
  const [down,setdown]=useState(data.downvote)
  // test 
  const [downtow,setdowntow]=useState( data.downvote)

  const handleI = ()=>{
    setcount(count+1)
    
    //  setcounttow(count)
     console.log(count,'handleI')
    const upvote ={upvote:count,downvote:downtow}
    axios.put(`https://learn-server-six.vercel.app/card/${data._id}`,upvote)
    .then(res => {
      console.log(res.data)
      if(res.data. modifiedCount&&count>0){
          setcounttow(count)
          refetch()
        
      }
      
      
    })
    
    
  }
  const handleD=()=>{
    setdown(down+1)
    console.log(down)
    
    const downvote ={ upvote:counttow,downvote:down}
    console.log(downvote)

    axios.put(`https://learn-server-six.vercel.app/card/${data._id}`,downvote)
    .then(res => {
      console.log(res.data)
      if(res.data. modifiedCount&&count>0){
        setdowntow(down)
        refetch()
      
    }
    })


   
 
  }

  return (
    <div>
    <div className=" max-w-[500px] h-auto my-20 shadow-2xl bg-slate-50 rounded-xl p-9">
    <div className="flex gap-3 justify-between items-center">

    <div className="avatar my-2">
    <div className="w-14 rounded-full">
      <img src={data?.image} />
    </div>
    </div>
    <div>Name : {data?.name}</div>
    <div>Time : {data?.date}</div>
    
    
    </div>

    <div className="flex flex-col justify-start gap-2 pl-5 py-3"> 
    <h1>Post Title : {data?.title}</h1>
    <h1>Tag : {data?.tag}</h1>
    <h1>Description : {data?.description}</h1>
    
    </div>
    

    <div className="flex justify-evenly items-center" >
    <button onClick={handleI} className="btn btn-accent"><BiSolidUpvote /> </button><h1 className="mx-2">{counttow}</h1>
    <button onClick={handleD} className="btn btn-accent"><BiSolidDownvote/> </button>
    <h1>{downtow}</h1>
    <button className="btn btn-accent"><FaCommentAlt /><h1>{datas?.length}</h1> </button>
<Link to={`/share/${data._id}`}> <button className="btn btn-accent"><FaRegShareSquare /></button></Link>
    </div>
</div>
    
    </div>
  )
}

export default CardDynamic