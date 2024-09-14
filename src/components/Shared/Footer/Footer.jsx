import { Link } from "react-router-dom";
import Container from "../Container";


const Footer = () => {
  return (
    <footer  className="footer footer-center bg-gradient-to-r from-purple-700 to-indigo-600 rounded-t-lg    text-base-300 p-10">
      <Container >
        <div  data-aos="fade-down"
     data-aos-duration="500" className="flex flex-col gap-5">
        <aside className="flex flex-col items-center justify-center gap-2">
      <img className="w-12 rounded-md" src="https://i.ibb.co.com/s51d5J3/turnneja-logo.png" alt="" />
      <p className="text-xl  font-bold">
        Turneja Limited
      </p>
      <p className=" text-base-300">Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav>
      <div className="grid text- grid-flow-col gap-4 ">
       <Link to='/' className="border-b-[3px] border-transparent hover:text-yellow-300 hover:border-yellow-300 transition duration-500  font-semibold  cursor-pointer">Home</Link>
       <Link to='/signup' className="border-b-[3px] border-transparent hover:text-yellow-300 hover:border-yellow-300 transition duration-500  font-semibold  cursor-pointer">SignUp</Link>
       <Link to='/login' className="border-b-[3px] border-transparent hover:text-yellow-300 hover:border-yellow-300 transition duration-500  font-semibold  cursor-pointer">Login</Link>
        
      </div>
    </nav>
        </div>
    
      </Container>
  </footer>
  );
};

export default Footer;
