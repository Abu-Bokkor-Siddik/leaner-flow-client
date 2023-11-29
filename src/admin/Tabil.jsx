import axios from 'axios';
import Swal from 'sweetalert2'

const Tabil = ({datas,refetch}) => {
    const deletehere=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              const res = axios.delete(`https://learn-server-six.vercel.app/users/${id}`)
              .then(result =>{
                // console.log(result.data)
                if(result.data.deletedCount>0){
                  refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your  card has been deleted.",
                    icon: "success"
                  });
        
                }
              })
            }
          });
    }
  return (
    <div>
    <table className="table overflow-x-auto">
    {/* head */}
    <thead className="min-w-[1200px]">
      <tr className="">
         <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>User or Admin</th>
        <th>Delete</th>
       
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        datas?.map((item,index)=> <tr key={item._id}>
          <th>{index+1}</th>
          <td> {item?.name}</td>
          <td>{item?.email} </td>
          <td>{item?.role} </td>
          <td><button onClick={()=>deletehere(item?._id)}>Delete</button> </td>
          

         
        </tr>)
      }
     
      
    </tbody>
  </table>
    
    </div>
  )
}

export default Tabil