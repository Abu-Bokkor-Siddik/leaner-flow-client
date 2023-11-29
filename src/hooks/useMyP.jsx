import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import  { useContext } from 'react'
import { AuthContex } from '../auth/AuthProvidev'

const useMyP = () => {
    const {user}=useContext(AuthContex)
    const {data,refetch}=useQuery({
        queryKey:["single",user?.email],
        queryFn:async()=>{
            const data = await axios.get(`https://learn-server-six.vercel.app/user?email=${user.email}`)
            return data.data
        }
    })
  return (
   {data,refetch}
  )
}

export default useMyP