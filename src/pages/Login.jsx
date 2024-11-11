import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../Context/AuthProvider";


const Login = () => {

    const {signInUser,googleSignIn} = useContext(AuthContex);
    const navigate = useNavigate()

    const loginHandler=(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(data=> {
            console.log(data.user)
            e.target.reset()
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const googleLoginHandler=()=>{
        googleSignIn()
    }


    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={loginHandler} className="card-body">
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
                  <p className="">
                    Do not Have an Account? 
                    <Link to="/register"><span className="text-blue-600 underline"> Register Now</span></Link>
                  </p>
                </div>
                <p className="text-center font-medium">OR</p>
                <div className="form-control mt-6">
                  <button onClick={googleLoginHandler} className="flex justify-center items-center gap-6 border-2 p-3 rounded-full">
                    <img src="https://i.ibb.co.com/2ZcdcPq/googlelogo.webp" alt="" className="w-8 h-8 rounded-full" />
                    <span className="font-semibold">Sign With Google</span>
                  </button>
                </div>
              </form>
            </div>
            
        </div>
    );
};

export default Login;