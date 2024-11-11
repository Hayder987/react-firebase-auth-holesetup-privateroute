import { useContext } from "react";
import { AuthContex } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";


const PriveRoute = ({children}) => {

    const {user,loading} = useContext(AuthContex)

    if(loading){
        return <p className="text-center"><CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></p>
    }
    
    if(user){
        return children
    }

    return (
        <div>
          <Navigate to="/login"></Navigate>  
        </div>
    );
};

export default PriveRoute;