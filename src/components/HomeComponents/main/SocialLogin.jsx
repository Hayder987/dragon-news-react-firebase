import { useContext } from "react";
import { AuthContext } from "../../../contexApi/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn, githubSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const { state} = useLocation()

    const googleLoginHandler=()=>{
        googleSignIn()
        .then(()=>{
           state? navigate(state): navigate("/")
            toast.success("Sign In SuccessFully")
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }

    const githubLoginHandler =()=>{
        githubSignIn()
        .then(()=>{
            state? navigate(state): navigate("/")
            toast.success("Sign In SuccessFully")
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }

    return (
        <div>
            <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold mb-5">Login With</h1>
               <button onClick={googleLoginHandler} className="flex justify-center items-center gap-3 border-2 rounded-full p-3 w-full">
                   <img src="https://i.ibb.co.com/2ZcdcPq/googlelogo.webp" alt="" className="w-8 h-8 rounded-full" />
                   <span className="text-base font-semibold">Login with Google</span>
               </button>
               <button onClick={githubLoginHandler} className="flex justify-center items-center gap-3 border-2 rounded-full p-3 w-full">
                   <img src="https://i.ibb.co.com/qpyXFfH/github-logo.webp" alt="" className="w-8 h-8 rounded-full" />
                   <span className="text-base font-semibold">Login with Github</span>
               </button>
            </div>
        </div>
    );
};

export default SocialLogin;