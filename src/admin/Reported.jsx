import { useQuery } from "@tanstack/react-query"
import useAxiosP from "../hooks/useAxiosP"

// http://localhost:3005/report
const Reported = () => {
  const axiosP = useAxiosP()
  const {data}= useQuery({
    queryKey:['reports'],
    queryFn: async()=>{
      const results = await axiosP.get('/report')
      return results.data
    }
  })
  console.log(data)
  return (
    <div><table className="table overflow-x-auto">
    {/* head */}
    <thead className="min-w-[1200px]">
      <tr className="">
         <th></th>
        <th>Post</th>
        <th>Title</th>
        <th>Commener Email</th>
        <th>Report</th>
        <th>Comment</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data?.map((item,index)=> <tr key={item._id}>
          <th>{index+1}</th>
          <td> {item?.postEmails}</td>
          <td>{item?.title} </td>
          <td>{item?.commenerEmails} </td>
          <td>{item?.typeReport} </td>
          <td>{item?.commentss} </td>

         
        </tr>)
      }
     
      
    </tbody>
  </table></div>
  )
}

export default Reported