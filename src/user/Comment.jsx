import { Link, useLoaderData } from "react-router-dom"
import useComment from "../hooks/useComment"

// http://localhost:3005/comment?email=mdmasud01833798650&title=Need help
const Comment = () => {
    const singledata = useLoaderData()
    console.log(singledata)
    const{data}=useComment(singledata.title)
    console.log(data,'form hook comment')
  return (
    <div>
    <table className="table overflow-x-auto">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>COMMENTER EMAIL</th>
        <th>COMMENTS</th>
        <th>FEEDBACK</th>
        <th>REPORT</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data?.map(item=> <tr key={item._id}>
          <th>1</th>
          <td> {item.commenerEmail}</td>
          <td>comment {(item.comments).slice(0,20)}<Link>.....</Link></td>
          <td><button>feedback selet hobe korbo </button></td>
          <td><button>report horbo...</button></td>
        </tr>)
      }
     
      
    </tbody>
  </table>
    
    
    </div>
  )
}

export default Comment