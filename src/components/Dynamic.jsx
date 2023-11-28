import { useLoaderData } from "react-router-dom"
import CardDynamic from "./CardDynamic";
import { useContext } from "react";
import { AuthContex } from "../auth/AuthProvidev";
import useAxiosP from "../hooks/useAxiosP";
import useComment from "../hooks/useComment";


const Dynamic = () => {
    const data = useLoaderData()
    const {user}=useContext(AuthContex)
    const axiosP =useAxiosP()

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
          }
        })
        console.log(commentinfo)

        // console.log(comments)
    }
    


// here is comment count use hook okk
    const{data:datas,refetch}=useComment(data.title)
    console.log(datas)
  return (
    <div className="min-h-[800px] max-w-[600px] mx-auto ">
  
    <CardDynamic data={data} datas={datas} refetch={refetch}></CardDynamic>
    <div className=" mx-auto flex flex-col justify-center items-center">
    <form  onSubmit={handel}>
    <textarea name="comment" className="textarea textarea-bordered" placeholder="Bio"></textarea>
    <div><button className="btn btn-sm mx-12 btn-accent">Comment</button></div>
    
    </form>
    
    </div>
    </div>
  )
}

export default Dynamic