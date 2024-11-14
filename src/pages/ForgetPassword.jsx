import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/HomeComponents/header/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../contexApi/AuthProvider";
import { toast } from "react-toastify";


const ForgetPassword = () => {
    const {pathname} = useLocation();
    const {resetPassword} = useContext(AuthContext);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate()

    const forgetHandler=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;

    setSuccess("")
    resetPassword(email)
    .then(()=>{
        setSuccess("Reset Link Sent Your Email");
        toast.success("Reset Link Sent Your Email ; Check your Email");
        navigate("/login")
    })
    .catch(err=>{
        toast.error(err.message)
    })
    }
    

    return (
        <div>
            {
                pathname === "/reset" && <NavBar></NavBar>
            }
            <div className="">
                <div className="flex flex-col  mx-auto justify-center items-center p-2 md:p-10">
                    <h1 className="text-3xl font-bold text-center mb-4">Forget Your Password?</h1>
                    <img src="https://i.ibb.co.com/kmpNhDc/reset-password.jpg" alt="" 
                    className="w-60" />
                     <form onSubmit={forgetHandler} className="card-body">
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Enter Your Email Address:</span>
                         </label>
                         <input type="email" name="email" placeholder="email" className="input w-full input-bordered rounded-none" required />
                       </div>
                       
                       <div className="form-control mt-6">
                         <button className="btn btn-primary text-xl">Reset</button>
                       </div>
                       <div className="form-control mt-6">
                         {
                            success && <p className="text-green-600 font-semibold text-center">{success}</p>
                         }
                       </div>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;