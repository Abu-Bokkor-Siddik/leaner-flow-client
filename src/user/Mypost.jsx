import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"

import { useQuery } from "@tanstack/react-query"
import useAxiosP from "../hooks/useAxiosP"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
const Mypost = () => {
  const axiosP=useAxiosP()
  const {user}=useContext(AuthContex)
  // check data state 
  
  const{data,error,isLoading}=useQuery({
    queryKey:['mypost',user?.email],
    queryFn:async()=>{
    const result = await axiosP.get(`/mypost?email=${user.email}`)
      return result.data
    }
     
  }

  )
 
  console.log(data&&data)
  // console.log(error)



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
              <td><button>Delete</button></td>
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