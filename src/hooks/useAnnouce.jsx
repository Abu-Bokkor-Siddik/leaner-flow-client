import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const useAnnouce = () => {

  const {data,refetch}=useQuery({
        queryKey:["announce"],
        queryFn:async()=>{
            const data = await axios.get('http://localhost:3005/annouce')
            return data.data
        }
    })
  return (
   {data,refetch}
  )
}

export default useAnnouce