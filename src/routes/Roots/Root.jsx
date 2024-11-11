import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[75vh] py-12">
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;