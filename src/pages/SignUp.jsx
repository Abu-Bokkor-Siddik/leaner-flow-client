import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContex } from "../auth/AuthProvidev"
import { imgUpload } from "../hooks/Imageup"
import axios from "axios"


const SignUp = () => {
  const {user,signs,profile}=useContext(AuthContex)
   
  const signup = async (e)=>{
    e.preventDefault()
    const name = e.target.name.value 
    const image = e.target.image.files[0] 
    const email = e.target.email.value 
    const password = e.target.password.value 
    
    console.log(name,image,email,password)
    try{
      // image uploade 
      const data = await imgUpload(image)
      console.log(data,'data ')
      const regi = await signs(email,password)
      await profile(name,data?.data?.display_url)
      // console.log(data?.data?.display_url,'main url',name)

        // console.log(regi,'here data ')

        const userinfo = {
          name,
          email,
          image:data?.data?.display_url,
          badge:'bronze'

        }
        await axios.post('https://learn-server-six.vercel.app/user',userinfo)
        .then(res => {
          console.log(res.user)
          if(res.data.insertedId){
            alert('added ')
          
          }
        
        })
        console.log(userinfo,'user info here')
    }catch(err){
      console.log(err)
    }
    // console.log(data,'come from img bb')
      
    // signs(email,password)
    // .then(res =>{
    //   const user = res.user 
    //   profile(name,image)
    //   .then(res =>{
    //     console.log(res)
    //   })
    //   console.log(user)
    // })
    

  }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={signup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name='image' type="file" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <p>If you hava an account <Link className='text-blue-800' to='/login'>Go Login</Link></p>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp