import { useQuery } from "@tanstack/react-query"
import useAxiosP from "./useAxiosP"
const useTotal = () => {
    const axiosP=useAxiosP()
    const {data,refetch}=useQuery({
        queryKey:['totals'],
        queryFn:async()=>{
            const result = await axiosP.get(`/number`)
            return result.data
        }
    })
  return (
   {data,refetch}
  )
}

export default useTotal