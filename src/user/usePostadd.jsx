import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import useAxiosP from "../hooks/useAxiosP"


const usePostadd = () => {
    const {user}=useContext(AuthContex)
    const axiosP=useAxiosP()
    const {data:singel}=useQuery({
        queryKey:['mypost',user?.email],
    queryFn:async()=>{
    const result = await axiosP.get(`/mypost?email=${user.email}`)
      return result.data
    }
    })
  return (
   {singel}
  )
}

export default usePostadd