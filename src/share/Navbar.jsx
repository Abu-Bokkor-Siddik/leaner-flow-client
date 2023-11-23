import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../auth/AuthProvidev";

const Navbar = () => {
 
  const {user,logout}=useContext(AuthContex)
  const [isopen, setisopen] = useState(false);
  console.log(isopen);

  const logs = ()=>{
    logout()
    .then(res=> {
      console.log(res)
      setisopen(false)
    })
  }

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            {/**navbar 1200px */}
            <div className=" w-full max-w-[1400px] mx-auto ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=" px-2 mx-40 ">
                <div className="flex  justify-center items-center gap-3">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://i.ibb.co/4JqcBmM/happy-logo-png-97360.jpg"
                    alt=""
                  />

                  <p className="text-2xl font-bold">LEANER-FLOW</p>
                </div>
              </div>
              <div className="flex-none hidden lg:block">
                <div className="menu menu-horizontal">
                  {/* Navbar menu content here */}

                  <div className="flex flex-2 gap-3 justify-center items-center  ">
                    <NavLink className="text-xl font-semibold" to="/">
                      Home
                    </NavLink>

                    <NavLink className="text-xl font-semibold" to="/create">
                      Membership
                    </NavLink>
                    <NavLink className="text-xl font-semibold" to="/create">
                      Notification icon
                    </NavLink>
                    <NavLink className="text-xl font-semibold" to="/create">
                      Join US
                    </NavLink>
                  </div>
                  {/** user name and profile would be here  */}
                  <div className="flex justify-center items-center text-xl font-semibold mx-10 ">
                    
                    {user&&<div className="avatar">
                      <div
                        onClick={() => setisopen(!isopen)}
                        className="w-16 rounded-full cursor-pointer mx-10"
                      >
                        <img src={user?.photoURL} />
                      </div>
                    </div>}
                    {isopen && (
                      <div className="absolute top-32 text-start w-36 bg-slate-50 h-auto rounded-xl p-3">
                      
                      <p>{user?.displayName}</p>
                     <Link> <p>dashboard</p></Link>
                      

                      <button onClick={logs} className="btn btn-accent mx-3">logOut</button>
                    
                      
                      
                      
                      </div>
                    )}
                    
                    <NavLink to="/login">
                <button className="btn btn-accent ">login</button>
              </NavLink>
                  </div>
                  <div className="flex gap-3 justify-center items-center  "></div>
                </div>
              </div>
              {/**end */}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
              <NavLink className="" to="/">
                Home
              </NavLink>
              <NavLink to="/create">Membership</NavLink>
              <NavLink to="/create">Notification icon</NavLink>
              <NavLink to="/create">Join US</NavLink>
              <button  className="btn btn-accent ">
                logOut
              </button>
              :{" "}
              <NavLink to="/login">
                <button className="btn btn-accent ">login</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
