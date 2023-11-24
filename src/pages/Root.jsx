import { Outlet } from "react-router-dom"
import Navbar from "../share/Navbar"
import Footer from "../share/Footer"


const Root = () => {
  return (
    <div className="">
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Root