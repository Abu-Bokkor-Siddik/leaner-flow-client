import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
// http://localhost:3005/three?email=nadim@gamil.com

const useThree = () => {
    const {user}=useContext(AuthContex)
    const {data:three,refetch}=useQuery({
      queryKey:['three',user?.email],
      queryFn: async()=>{
        const result = await axios.get(`http://localhost:3005/three?email=${user.email}`)
        return result.data 
      }
    })
  return (
    {three,refetch}
  )
}

export default useThree