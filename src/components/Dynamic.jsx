import { useLoaderData } from "react-router-dom"
import CardDynamic from "./CardDynamic";


const Dynamic = () => {
    const data = useLoaderData()
    console.log(data)
    const handel =(e)=>{
        e.preventDefault()
        const comments = e.target.comment.value
        console.log(comments)
    }
  return (
    <div className="min-h-[800px] max-w-[600px] mx-auto ">
  
    <CardDynamic data={data}></CardDynamic>
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