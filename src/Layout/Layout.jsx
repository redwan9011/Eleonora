import {Outlet} from "react-router-dom"
import Navbaar from "../Components/Navbar/Navbaar";

const Layout = () => {
    return (
        <div>
           
         <Navbaar></Navbaar>
           <Outlet></Outlet>
        </div>
    );
};

export default Layout;    