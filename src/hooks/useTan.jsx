import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"


const useTan = () => {
    
    const {data,refetch}=useQuery({
        queryKey:["datavote"],
        queryFn:async()=>{
            const data = await axios.get('http://localhost:3005/vote')
            return data.data
        }
    })
  return (
   {data,refetch}
  )
}

export default useTan