import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="flex justify-around p-6">
            <ul className="flex justify-center gap-10 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
            </ul>
            <h1 className="text-2xl font-semibold">Rakib</h1>
            
        </div>
    );
};

export default NavBar;