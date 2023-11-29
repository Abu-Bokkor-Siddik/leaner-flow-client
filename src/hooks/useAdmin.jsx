import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import axios from "axios"


const useAdmin = () => {
    const {user}=useContext(AuthContex)
    const {data:isAdmin,isPending,refetch}=useQuery({
        queryKey:['isadmin',user?.email],
        queryFn:async()=>{
            const result = await axios.get(`https://learn-server-six.vercel.app/user/admin/${user.email}`)
            console.log(result.data)
            return result.data.admin
        }
    })
  return (
    [isAdmin,isPending]
  )
}

export default useAdmin