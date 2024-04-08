import { Link, NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navbaar = () => {
    return (
        <div >
             <Navbar fluid rounded >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://i.ibb.co/XpdQNYy/pngtree-initial-logo-e-inside-a-rounded-letter-negative-space-logo-red-image-315676-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="E Logo" />
        <span className="self-center whitespace-nowrap text-xl  dark:text-white font-monster">Mehedi By Eleonora</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link  ><NavLink to='/'> Home</NavLink></Navbar.Link>
  
        <Navbar.Link > <NavLink to='/services'>Services</NavLink></Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Navbaar;