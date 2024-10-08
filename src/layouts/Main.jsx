import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Main = () => {
  useEffect(()=>{
    Aos.init()
},[])
  return (
 
    <div>
      <Navbar />
      <div className="pt-5 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
