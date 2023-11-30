import { useContext } from "react"
import { AuthContex } from "../auth/AuthProvidev"
import useTotal from "../hooks/useTotal"
import { PieChart, Pie,Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import axios from "axios";
import useAxiosP from "../hooks/useAxiosP";
import Swal from 'sweetalert2'



const AdminP = () => {
  const {user}=useContext(AuthContex)
  const axiosP= useAxiosP()
  const{data}=useTotal()
  console.log(data,'count')

   const COLORS = ['#0088FE', '#00C49F', '#FFBB28',];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



const datas = [
  { name: 'Posts', value: data?.posts},
  { name: 'Comments', value: data?.commentes},
  { name: 'Users', value: data?.users}
  
]


const tagh = (e)=>{
  e.preventDefault()
  const tags = e.target.name.value 
  const taginfo = {
    tag:tags,
    adminemail:user?.email
  }
  const result = axiosP.post('/tag',taginfo)
  .then(res=>{
    console.log(res.data)
    if(res.data.insertedId){
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  })
  // console.log(taginfo)
}

  return (
    <div>
    <h1 className="text-4xl text-center "> Welcome Back</h1>
    <div className="flex gap-40 justify-center my-14 ">
    <p>Total Post : {data?.posts}</p>
    <p>Total Comments : {data?.commentes}</p>
    <p>Total Users : {data?.users}</p>
    </div>


    <div className="flex flex-col  justify-center items-center">
    
    <div className="card w-96 bg-base-100 flex mt-14 justify-center items-center shadow-xl">
  
    <div className="avatar ">
    
    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={user?.photoURL} />
    </div>
  </div>





  <div className="card-body">
    <h2 className="card-title">Name : {user?.displayName}</h2>
    <p className="flex">Email : {user?.email}</p>
    <div className="card-actions justify-end">
      <button className="btn mx-auto my-4 btn-sm btn-primary">Profile</button>
    </div>
  </div>
</div>
    
    </div>

    {/**form */}
   <div >
   
   <form onSubmit={tagh} className="flex my-14  justify-center  gap-3 items-center">
   <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
   <button className="btn btn-accent btn-sm">Add Tag</button>
   </form>
  
   
   
   </div>


{/**constome chart  */}
<h1 className="text-4xl text-center"> PieChart </h1>


        <PieChart className="-mt-28" width={800} height={800}>
        <Legend></Legend>
          <Pie
            data={datas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {datas?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
          
          <Tooltip ></Tooltip>
          
        </PieChart>
        
      

{}
    </div>
  )
}

export default AdminP