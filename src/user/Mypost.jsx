import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"

import { useQuery } from "@tanstack/react-query"
import useAxiosP from "../hooks/useAxiosP"
import axios from "axios"
// import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
// import useThree from "./useThree"
const Mypost = () => {
  const axiosP=useAxiosP()
  const {user}=useContext(AuthContex)
  // check data state 
  
  const{data,error,isLoading,refetch}=useQuery({
    queryKey:['mypost',user?.email],
    queryFn:async()=>{
    const result = await axiosP.get(`/mypost?email=${user.email}`)
      return result.data
    }
     
  }

  )
 
  console.log(data&&data)
  // console.log(error)

const handledelete=(id)=>{
  console.log(id)

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     
      const res = axios.delete(`https://learn-server-six.vercel.app/mypost/${id}`)
      .then(result =>{
        console.log(result.data)
        if(result.data.deletedCount>0){
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your  card has been deleted.",
            icon: "success"
          });

        }
      })
    }
  });
}

  return (
    <div>
    {
      isLoading ?<p className="text-4xl text-center">loading</p>:<div><div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Number of Vote</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            data?.map(item=> <tr key={item._id}>
              <th>1</th>
              <td>{item.title}</td>
              <td>Upvote : {item.upvote} Downvote : {item.downvote}</td>
              <td><Link to={`/dashboard/comment/${item._id}`}><button>Comment</button></Link></td>
              <td><button onClick={()=>handledelete(item._id)}>Delete</button></td>
            </tr>)
          }
         
          
        </tbody>
      </table>
    </div></div>
    }

    
    </div>
  )
}

export default Mypost