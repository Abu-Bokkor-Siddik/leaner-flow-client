import { useContext } from "react"
import { AuthContex } from "./AuthProvidev"
import { Navigate } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"


const AdminPrivet = ({children}) => {
    const [isAdmin,isPending]=useAdmin()

    const {user,loading}=useContext(AuthContex)
    if(loading ||isPending){
        return <p className="text-6xl">Loading</p>
    }
    if(user&&isAdmin){
        return  children
    }

  return <Navigate to='/login'></Navigate>
}

export default AdminPrivet