import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/HomeComponents/header/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../contexApi/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const {pathname} = useLocation();
    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const logInHandler = e =>{
       e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
   
      setError("")
      
      if(password.length<6){
        setError("Password must be 6 digit")
        return
      }
      loginUser(email, password)
      .then(()=>{
        toast.success("Login SuccessFully!")
        navigate("/")
      })
      .catch(err=>{
        setError(err.message)
      })
      
    }

    return (
        <div>
            {
                pathname ==="/login" && <NavBar></NavBar>
            }
            <div className="flex justify-center mt-12">
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={logInHandler} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                      <div className="form-control mt-6">
                        <Link to="/register" className="">
                            Do Not Have An Account?
                            <span className="text-blue-500 underline"> Register Now</span>
                        </Link>
                      </div>
                      <div className="form-control mt-6">
                       {
                        error && <p className="text-red-500">{error}</p>
                       }
                    </div>
                    </form>
                  </div>
            </div>
        </div>
    );
};

export default Login;