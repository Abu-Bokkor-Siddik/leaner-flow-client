import { useContext } from "react";
import { AuthContex } from "../auth/AuthProvidev";
import useAxiosP from "../hooks/useAxiosP";

const MakeAn = () => {
  const{user}=useContext(AuthContex)
  const axiosP =useAxiosP()
  const fromvalues = (e) => {
    e.preventDefault();
    const name = e.target.name.value 
    const title = e.target.title.value 
    const image = e.target.image.value 
    const description = e.target.description.value 
    const email = user?.email
    const date = new Date().toLocaleDateString() 
    const announceinfo ={
      image,
      name,
      title,
      description,
      email,
      date
    }
    axiosP.post('/annouce',announceinfo)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        alert('added')
      }
    })
    console.log(announceinfo)
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0  shadow-2xl bg-slate-100 w-auto ">
            {
              <form onSubmit={fromvalues} className="card-body ">
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
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="Title"
                      className="input input-bordered"
                      required
                    />
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
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAn;
