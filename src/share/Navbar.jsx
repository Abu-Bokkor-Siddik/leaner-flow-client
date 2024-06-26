import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../auth/AuthProvidev";
import { IoMdNotifications } from "react-icons/io";
import useAnnouce from "../hooks/useAnnouce";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContex);
  const [isopen, setisopen] = useState(false);
  console.log(isopen);

  const logs = () => {
    logout().then((res) => {
      console.log(res);
      setisopen(false);
    });
  };
  // announce count 
  const{data}=useAnnouce()
  const[isAdmin]=useAdmin()
  // console.log(isAdmin)

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" lg:w-auto navbar bg-base-300">
            {/**navbar 1200px */}
            <div className=" max-w-[425px]  lg:max-w-[1400px] lg:mx-auto">
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
              <div className=" px-2 mx-auto lg:mx-40 ">
                <div className="flex  justify-center items-center gap-3">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://i.ibb.co/4JqcBmM/happy-logo-png-97360.jpg"
                    alt=""
                  />

                  <pre className="lg:text-2xl font-bold">LEANER-FLOW</pre>
                </div>
              </div>
              <div className="flex-none z-50 hidden lg:block">
                <div className="menu z-50 menu-horizontal">
                  {/* Navbar menu content here */}

                  <div className="flex z-50 flex-2 gap-7  justify-center items-center  ">
                    <NavLink className="text-xl font-semibold" to="/">
                      Home
                    </NavLink>

                    <NavLink className="text-xl font-semibold" to="/member">
                      Membership
                    </NavLink>
                    <div>
                      <button className="btn">
                        <IoMdNotifications></IoMdNotifications>
                        <div className="badge ">{data?.length}</div>
                      </button>
                    </div>
                    <NavLink className="text-xl font-semibold" to="/login">
                      Join US
                    </NavLink>
                  </div>
                  {/** user name and profile would be here  */}
                  <div className="flex justify-center items-center text-xl font-semibold mx-10 ">
                    {user && (
                      <div className="avatar">
                        <div
                          onClick={() => setisopen(!isopen)}
                          className="w-16 rounded-full cursor-pointer mx-10"
                        >
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    )}
                    {isopen && (
                      <div className="absolute   top-32 text-start w-44 bg-slate-50 h-auto rounded-xl p-3">
                        <p>{user?.displayName}</p>
                        {
                          user&& isAdmin&&<Link to="/dashboard/admin">
                          
                          <p className="my-5">dashboard</p>
                        </Link>
                        }
                        {
                          user&& !isAdmin&&<Link to="/dashboard/myprofile">
                          
                          <p className="my-5">dashboard</p>
                        </Link>
                        }

                        <button onClick={logs} className="btn bg-[#79d0e3]  mx-3">
                          logOut
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 justify-center items-center  "></div>
                </div>
              </div>
              {/**end */}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu text-lg p-4 w-80 z-50 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
              <NavLink className="" to="/">
                Home
              </NavLink>
              <NavLink to="/member">Membership</NavLink>
              <NavLink ><IoMdNotifications></IoMdNotifications></NavLink>
              <NavLink to="/login">Join US</NavLink>
              {user?<button onClick={logs} className="btn bg-[#79d0e3] ">logOut</button>:
              <NavLink to="/login">
                <button className="btn bg-[#79d0e3]  ">login</button>
              </NavLink>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
