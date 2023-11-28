import useMyP from "../hooks/useMyP"
import { LuBadgeCheck } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import useThree from "./useThree";



const Myprofile = () => {
    const{data}=useMyP()
    console.log(data?.email)

    // here is three post of user 
const {three}=useThree()
console.log(three,'kfakfka')
  return (
    <div>
    <div className="card w-96 bg-base-100 flex justify-center items-center shadow-xl">
  
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
<div> hi</div>

    
    </div>
  )
}

export default Myprofile