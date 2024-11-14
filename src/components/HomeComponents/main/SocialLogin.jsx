

const SocialLogin = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold mb-5">Login With</h1>
               <button className="flex justify-center items-center gap-3 border-2 rounded-full p-3 w-full">
                   <img src="https://i.ibb.co.com/2ZcdcPq/googlelogo.webp" alt="" className="w-8 h-8 rounded-full" />
                   <span className="text-base font-semibold">Login with Google</span>
               </button>
               <button className="flex justify-center items-center gap-3 border-2 rounded-full p-3 w-full">
                   <img src="https://i.ibb.co.com/qpyXFfH/github-logo.webp" alt="" className="w-8 h-8 rounded-full" />
                   <span className="text-base font-semibold">Login with Github</span>
               </button>
            </div>
        </div>
    );
};

export default SocialLogin;