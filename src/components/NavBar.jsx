import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Context/AuthProvider";


const NavBar = () => {

    const {user, signOutUser} = useContext(AuthContex);

    const logOutHandler=()=>{
        signOutUser()

    }

    return (
        <div className="flex justify-around p-6">
            <ul className="flex justify-center gap-10 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/dashboard">DashBoard</NavLink>
            </ul>
            <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
            {
                user ? <>
                <Link to="/login"><button onClick={logOutHandler} className="border-2 p-3">Log-Out</button></Link>
                </>:
                <Link to="/login"><button className="border-2 p-3">Log-In</button></Link>
            }
        </div>
    );
};

export default NavBar;