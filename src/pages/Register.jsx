import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/HomeComponents/header/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../contexApi/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
    const {pathname} = useLocation();
    const { registerUser, updateUserData} = useContext(AuthContext)
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const registerHandler = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const imgPath = e.target.imgpath.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
      
        setSuccess("")
        setError("")

        registerUser(email,password)
        .then(()=>{
          updateUserData(name, imgPath)
          toast.success("User Created SuccessFully")
          setSuccess("User Created SuccessFully")
          navigate("/login")
        })
        .catch(err=>{
          setError(err.message)
        });


    }


    return (
        <div>
             {
                pathname ==="/register" && <NavBar></NavBar>
            }
             <div className="flex justify-center items-center my-12">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={registerHandler} className="card-body">
                  <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="Text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Image Path</span>
                      </label>
                      <input type="text" name="imgpath" placeholder="Img-Url" className="input input-bordered" />
                    </div>
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
                        <Link to="/login" className="">
                             Have An Account?
                            <span className="text-blue-500 underline"> Login Now</span>
                        </Link>
                    </div>
                    <div className="form-control mt-6">
                       {
                        success && <p className="text-green-500">{success}</p>
                       }
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

export default Register;