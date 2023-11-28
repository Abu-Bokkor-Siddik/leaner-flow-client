import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import useAxiosP from "./useAxiosP"


const useComment = (title) => {
    const {user}=useContext(AuthContex)
    const axiosP= useAxiosP()
    const {data,refetch}=useQuery({
        queryKey:['comments',user?.email],
        queryFn:async()=>{
            const result = await axiosP.get(`/comments/title?title=${title}`)
            return result.data
        }
    })
  return (
   {data,refetch}
  )
}

export default useComment