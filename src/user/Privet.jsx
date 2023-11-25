import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import { Navigate } from "react-router-dom"


const Privet = ({children}) => {
    const {user,loading}=useContext(AuthContex)
    if(loading){
        return <p className="text-6xl">Loading</p>
    }
    if(user){
        return  children
    }

  return <Navigate to='/login'></Navigate>
}

export default Privet