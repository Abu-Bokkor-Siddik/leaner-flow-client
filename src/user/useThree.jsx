import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
// https://learn-server-six.vercel.app/three?email=nadim@gamil.com

const useThree = () => {
    const {user}=useContext(AuthContex)
    const {data:three,refetch}=useQuery({
      queryKey:['three',user?.email],
      queryFn: async()=>{
        const result = await axios.get(`https://learn-server-six.vercel.app/three?email=${user.email}`)
        return result.data 
      }
    })
  return (
    {three,refetch}
  )
}

export default useThree