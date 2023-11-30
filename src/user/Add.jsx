import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import useAxiosP from "../hooks/useAxiosP"
import useMyP from "../hooks/useMyP"
import usePostadd from "./usePostadd"
import { Link} from "react-router-dom";
import Swal from 'sweetalert2'


const Add = () => {
  const {user}=useContext(AuthContex)
  // use hook for single user find  
  // todo data length baki/..... user find here 
  const{data}=useMyP()
  const{singel}=usePostadd()
  console.log(data,'user single')


  const axiosp = useAxiosP();
  const fromvaluess = (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const title = e.target.title.value
    const cars = e.target.cars.value
    const description = e.target.description.value
    const image = e.target.image.value
  const CardItem = {
    name:name,
    email:email,
    title:title,
    tag:cars,
    description:description,
    image:image,
    date:new Date().toLocaleString(),
    upvote:0,
    downvote:0
    
  }
     axiosp.post('/card',CardItem)
     .then(res=>{
      console.log(res.data,'here is post data')
      if(res.data?.insertedId){
        Swal.fire({
          title: "Added successfully",
          text: "You clicked the button!",
          icon: "success"
        });
      }
     })

  }
  console.log(data)
  console.log(data?.badge==='bronze'&&singel?.length>5,'true or false')
  return (
    <div>
    {data?.badge==='bronze'&&singel?.length>5 ?<Link to="/member"><button className="btn mx-auto btn-accent">Member</button></Link>:
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0  shadow-2xl bg-slate-100 w-auto ">
            
              <form  onSubmit={fromvaluess} className="card-body ">
              <p className="text-center text-3xl">Add Item</p>

              <div className="grid grid-cols-2 w-auto gap-6 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Author Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="type name"
                    className="input input-bordered"
                    defaultValue={user?.displayName}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  defaultValue={user?.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="title"
                    className="input input-bordered"
                    required
                  />
                </div>
               
                <div className="form-control ">
                  <label className="h-9 ">Tag</label>
                  <select className="h-10" name="cars" id="cars">
                    <option value="javascript">Javascript</option>
                    <option value="english">English</option>
                    <option value="bkash">Bkash</option>
                    <option value="chat gpt">Chat gpt</option>
                    
                  </select>
                </div>
              </div>

              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
              />





              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Image"
                className="input input-bordered"
                defaultValue={user?.photoURL}
                required
              />

              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
                  
          </div>
        </div>
      </div>
  }
    </div>
  )
}

export default Add