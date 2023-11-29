import { useLoaderData } from "react-router-dom"
import CardDynamic from "./CardDynamic";
import { useContext } from "react";
import { AuthContex } from "../auth/AuthProvidev";
import useAxiosP from "../hooks/useAxiosP";
import useComment from "../hooks/useComment";
import { useState } from "react";


const Dynamic = () => {

    const data = useLoaderData()
    const {user}=useContext(AuthContex)
    const axiosP =useAxiosP()
// state 
const [sms,setsms]=useState(false)
    console.log(data)


    const handel =(e)=>{
        e.preventDefault()
        const comments = e.target.comment.value
        const commentinfo = {
          comments:comments,
          commenerEmail:user?.email,
          commenerName :user?.displayName,
          data:new Date().toLocaleString(),
          postEmail:data?.email,
          title:data?.title,
          postName:data?.name


        }
        const result = axiosP.post('/comment',commentinfo)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            alert('added comment')
            refetch()
            setsms(true)
          }
        })
        console.log(commentinfo)

        // console.log(comments)
    }
    


// here is comment count use hook okk
    const{data:datas,refetch}=useComment(data.title)
    console.log(datas)

    // disable 
    const smsdisable = ()=>{
      setsms(true)
    }
  return (
    <div className="min-h-[800px] max-w-[600px] mx-auto ">
  
    <CardDynamic data={data} datas={datas} refetch={refetch}></CardDynamic>
    <div className=" mx-auto flex flex-col justify-center items-center">
    <form   onSubmit={handel}>
    <textarea  name="comment" className="textarea textarea-bordered lg:min-w-[400px] mx-auto" placeholder="Bio"></textarea>
    <div className="lg:mx-48 my-5"><button disabled={sms}  className="btn btn-sm  btn-accent">Comment</button></div>
    
    </form>
    
    </div>
    </div>
  )
}

export default Dynamic