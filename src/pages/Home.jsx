import { useEffect, useState } from "react"
import Annoucement from "../components/Annoucement"
import Banner from "../components/Banner"
import Offer from "../share/Offer"
import Swiperss from "../share/Swiperss"
import CardHome from "../components/CardHome"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const Home = () => {
  // annoucement data 
  const [search,setsearch]=useState('')

  const{data,refetch,isLoading}=useQuery({
    queryKey:['card',search],
    queryFn:async()=>{
      const data = await axios.get(`http://localhost:3005/card?tag=${search}`)
      return data.data
    }
  })
  console.log(search,'here is vlaue')

  console.log('tan',data)
  const[ dataes,setdataes] =useState([])
    useEffect(()=>{
        fetch('/annouce.json')
        .then(res=> res.json())
        .then(data => setdataes(data))
    },[])

  return (
    <div>
    
    <Banner setsearch={setsearch}></Banner>

    {/**home card  */}
    {isLoading?"loading" :<CardHome data={data} refetch={refetch} ></CardHome>}
    <div >
    <h1 className="text-center text-4xl my-28">OFFERS TO USE THIS SIDE.HERE SOME DEMO TAGS</h1>
    <Swiperss></Swiperss>
    <Offer></Offer>

    
    </div>
    {/**annoucement  */}
    <div className=" grid grid-cols-3 gap-5  max-w-[1200px] mx-auto">
    {
      dataes?.map(item => <Annoucement key={item.id} item={item}></Annoucement>)
    }
    </div>
    {/**end */}
    </div>
  )
}

export default Home