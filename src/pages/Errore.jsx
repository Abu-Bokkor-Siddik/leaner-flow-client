import { Link } from "react-router-dom"


const Errore = () => {
  return (
    <div className="max-w-[1000px] mx-auto text-center my-32 ">
    <h1 className="text-4xl my-20">Page not found </h1>
    <Link to='/'><button className="btn btn-accent">Go Home</button></Link>
    </div>
  )
}

export default Errore