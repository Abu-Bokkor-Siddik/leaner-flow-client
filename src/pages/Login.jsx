import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../auth/AuthProvidev";
import useAxiosP from "../hooks/useAxiosP";

const Login = () => {
  const { logins, google } = useContext(AuthContex);
  const axiosP=useAxiosP()

  const loginhandels = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logins(email, password).then((res) => console.log(res));
  };
  // with google
  const googles = () => {
    google().then((res) => {
      // todo work info
      console.log(res);
      const info ={
        email:res.user?.email,
        name:res.user?.displayName,
        image:res.user?.photoURL,
        badge:'bronze'

      }
      axiosP.post('/user',info)
      .then(res =>{
        console.log(res.user)
      })
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginhandels} className="card-body">
              <p className="text-center text-3xl font-semibold">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p>
                If you have no account{" "}
                <Link className="text-blue-800" to="/signup">
                  Go Register
                </Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={googles} className="btn btn-primary mx-8">
              google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
