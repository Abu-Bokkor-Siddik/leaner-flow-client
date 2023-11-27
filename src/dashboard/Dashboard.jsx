import { NavLink, Outlet } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // todo 
    const[isAdmin]=useAdmin()
    console.log(isAdmin,'here')
    // const isAdmin =true;
  return (
    <div className=" max-w-[1250px] mx-auto min-h-[800px] my-20">
    <div className="flex gap-36">
    <div className="w-64 min-h-[800px] bg-stone-400">
    <ul className="menu p-4 my-1 ">
    {
        isAdmin?<div className="flex flex-col gap-4">
        <li><NavLink to='/dashboard/admin'>
    <CgProfile></CgProfile>
    Admin Home</NavLink></li>

    <li><NavLink to='/dashboard/manage'>
    <IoAdd></IoAdd>
    Manage User</NavLink></li>

    <li><NavLink to='/dashboard/reported'>
    <MdLocalPostOffice></MdLocalPostOffice>
    Reported</NavLink></li>
    <li><NavLink to='/dashboard/make'>
    <IoAdd></IoAdd>
    Make Announce</NavLink></li>
        
        
        
        </div> : <div className="flex flex-col gap-4">
        <li><NavLink to='/dashboard/myprofile'>
    <CgProfile></CgProfile>
    My Profile</NavLink></li>

    <li><NavLink to='/dashboard/add'>
    <IoAdd></IoAdd>
    Add</NavLink></li>

    <li><NavLink to='/dashboard/mypost'>
    <MdLocalPostOffice></MdLocalPostOffice>
    My Post</NavLink></li>

        
        
        </div>
    }
    {/**share */}
    <div className="divider"> or</div>
    <li><NavLink to='/'>
    <FaHome></FaHome>
    Home</NavLink></li>
    <li><NavLink to='/member'>
    <MdOutlinePayment></MdOutlinePayment>
    Membership</NavLink></li>



    </ul>
    </div>



    <div className="flex-1">

    <Outlet></Outlet>
    
    </div>
    </div>
    </div>
  )
}

export default Dashboard