import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Context/AuthProvider";


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContex)

    const registerHandler=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result=>{
            updateUserProfile(name)
            .catch(err=> console.log(err.message))
            console.log(result)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={registerHandler} className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="form-control mt-6">
                  <p className="">
                    Have an Account? 
                    <Link to="/login"><span className="text-blue-600 underline"> Login Now</span></Link>
                  </p>
                </div>
              </form>
            </div>
        </div>
    );
};

export default Register;