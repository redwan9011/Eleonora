import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navbaar = () => {
    return (
        <div>
             <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://i.ibb.co/XpdQNYy/pngtree-initial-logo-e-inside-a-rounded-letter-negative-space-logo-red-image-315676-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="E Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mehedi By Eleonora</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Navbaar;