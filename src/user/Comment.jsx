import { Link, useLoaderData } from "react-router-dom"
import useComment from "../hooks/useComment"
import { useState } from "react"
import useAxiosP from "../hooks/useAxiosP"

// http://localhost:3005/comment?email=mdmasud01833798650&title=Need help
const Comment = () => {
    const singledata = useLoaderData()
    const axiosP=useAxiosP()
    // console.log(singledata)
    const{data}=useComment(singledata.title)
    console.log(data,'form hook comment')
    const [report,setreport]=useState(false)
    const [selectvalue,setselectvalue]=useState('')

    const handlebutton=(e)=>{
      const feedbacks = e.target.value
      // console.log(feedbacks)
      setreport(true)
      setselectvalue(feedbacks)
      // handlebuttond(feedbacks)
      
    }
   
    const handlebuttond=(item)=>{
      // console.log(selectvalue)
      // console.log(selectvalue,'select')
      const postEmails =item?.postEmail;
      const commenerEmails= item?.commenerEmail;
      const commentss= item?.comments
      const title = item?.title 




      // console.log(item)
      const reportinfo={
        typeReport:selectvalue,
        postEmails:postEmails,
        commenerEmails:commenerEmails,
         commentss:commentss,
         title:title

      }
      const res = axiosP.post('/report',reportinfo)
      .then(result =>{
        console.log(result.data)
        if(result.data.insertedId){
          alert('added report')
        }
      })
      console.log(reportinfo)

      setreport(false)
    }

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
          <td><div className="form-control ">
          
          <select onClick={handlebutton}  className="" name="hello" id="hello">
          <option value="Normal">Normal</option>
            <option  value="Good">Good</option>
            <option value="Bad">Bad</option>
            
            
            
            
          </select>
        </div></td>
          <td><button disabled={!report} onClick={()=>handlebuttond(item)}  className="btn btn-accent">report</button></td>
        </tr>)
      }
     
      
    </tbody>
  </table>
    
    
    </div>
  )
}

export default Comment