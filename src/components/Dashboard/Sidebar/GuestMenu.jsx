
import MenuItem from "./MenuItem";
import { FaCheckSquare } from "react-icons/fa";


const GuestMenu = () => {
    console.log("guest menu")
    return (
        <>
        <MenuItem icon={FaCheckSquare} label='My Bookings' address='my-bookings'/>
        </>
    );
};

export default GuestMenu;