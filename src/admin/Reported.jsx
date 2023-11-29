import { useQuery } from "@tanstack/react-query"
import useAxiosP from "../hooks/useAxiosP"
import useRepports from "../hooks/useRepports"
import Tabil from "./Tabil"

// https://learn-server-six.vercel.app/report
const Reported = () => {
  const axiosP = useAxiosP()
  const {data}= useQuery({
    queryKey:['reportssall'],
    queryFn: async()=>{
      const results = await axiosP.get('/report')
      return results.data
    }
  })



  const {data:datas,refetch}=useRepports()
  console.log(datas,'afak;fa')
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
  </table>
  <h1 className="text-center text-4xl my-7">Admin Will Delete user </h1>
  {/**here tabil */}
  <Tabil datas={datas} refetch={refetch}></Tabil>
  </div>
  )
}

export default Reported