import { useQuery } from "@tanstack/react-query"
import useAxiosP from "../hooks/useAxiosP"
import axios from "axios"


const ManageU = () => {
  const axiosP= useAxiosP()
  const {data,refetch}=useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
      const result = await axiosP.get('/users')
      return result.data 
    }
  })
  console.log(data)
  const handleradmin = (item)=>{
    // console.log(id)
    const result =axios.patch(`http://localhost:3005/users/admin${item._id}`)
    .then(res =>{
      refetch()
      console.log(res.data)
      if(res.data.modifiedCount){
        alert('admin added ')
      }
    })
  }
  return (
    <div>
    <table className="table overflow-x-auto">
    {/* head */}
    <thead>
      <tr>
         <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Make Admin</th>
        <th>Subscription</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data?.map((item,index)=> <tr key={item._id}>
          <th>{index+1}</th>
          <td> {item.name}</td>
          <td>{item.email} </td>
          <td>{ item.role==="admin"?"Admin":<button onClick={()=>handleradmin(item)}>user</button>}</td>
          <td><button>{item.badge}</button></td>
        </tr>)
      }
     
      
    </tbody>
  </table>
    
    </div>
  )
}

export default ManageU