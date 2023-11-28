import useMyP from "../hooks/useMyP"
import { LuBadgeCheck } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import useThree from "./useThree";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";



const Myprofile = () => {
    const{data}=useMyP()
    // console.log(data?.email)

    // here is three post of user 
const {three}=useThree()
// console.log(three,'kfakfka')
  return (
    <div>
    <div className="card mx-auto my-6 w-96 bg-base-100 flex justify-center items-center shadow-xl">
  
    <div className="avatar ">
    {data?.badge==='bronze'&&<LuBadgeCheck className="text-orange-950 rounded w-7 h-7"></LuBadgeCheck>}

    {data?.badge==='gold'&&<TbPremiumRights className="text-orange-950 rounded w-7 h-7"></TbPremiumRights>}

    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={data?.image} />
    </div>
  </div>





  <div className="card-body">
    <h2 className="card-title">Name : {data?.name}</h2>
    <p className="flex">Email : {data?.email}</p>
    <div className="card-actions justify-end">
      <button className="btn mx-auto my-4 btn-sm btn-primary">Profile</button>
    </div>
  </div>
</div>

{/**here is three data */}
<div className="grid grid-cols-2 my-5 mx-auto gap-6">

{
  
  three?.map(item=><div key={item._id}  className=" max-w-[350px] h-auto my-3 shadow-2xl bg-slate-100 rounded-lg p-3 ">
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
 <h1>0</h1>

 </div>
   
  </div>




</div>)

}



</div>

    
    </div>
  )
}

export default Myprofile