import { useContext, useEffect, useState } from "react"
import Annoucement from "../components/Annoucement"
import Banner from "../components/Banner"
import Offer from "../share/Offer"
import Swiperss from "../share/Swiperss"
import CardHome from "../components/CardHome"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useTan from "../hooks/useTan"
import useAnnouce from "../hooks/useAnnouce"
import { AuthContex } from "../auth/AuthProvidev"


const Home = () => {
  // annoucement data 
  const [search,setsearch]=useState('')
  // test
  // const {data:card}=useTan()
  const {user}=useContext(AuthContex)

 const{data,refetch,isLoading}=useQuery({
    queryKey:['card',search,user?.email],
    queryFn:async()=>{
      const data = await axios.get(`https://learn-server-six.vercel.app/card?tag=${search}`)
      return data.data
    }
  })
  console.log(search,'here is vlaue')

  console.log('tan',data)
  const[ dataes,setdataes] =useState([])
    useEffect(()=>{
        fetch('https://learn-server-six.vercel.app/annouce')
        .then(res=> res.json())
        .then(data => setdataes(data))
    },[])
  // test 
  // const {data:dataess}=useAnnouce()
  // console.log(dataes.length)

  return (
    <div>
    
    <Banner setsearch={setsearch}></Banner>

    {/**home card  */}
    {isLoading?"loading" :<CardHome dataes={data} refetch={refetch} ></CardHome>}
    <div >
    <h1 className="text-center text-4xl my-28">OFFERS TO USE THIS SIDE.HERE SOME DEMO TAGS</h1>
    <Swiperss></Swiperss>
    <Offer></Offer>

    
    </div>
    {/**annoucement  */}
    <div className=" grid  justify-center items-center grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2  max-w-[1200px] mx-20 lg:mx-auto">
    {
      dataes?.map(item => <Annoucement key={item._id} item={item}></Annoucement>)
    }
    </div>
    {/**end */}
    </div>
  )
}

export default Home