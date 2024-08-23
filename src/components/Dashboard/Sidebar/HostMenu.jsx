import { MdAddHome } from "react-icons/md";
import MenuItem from "./MenuItem";
import { FaClipboardList } from "react-icons/fa";


const HostMenu = () => {
    return (
        <>
         <MenuItem icon={MdAddHome} label='Add Room' address='add-room'/>
             <MenuItem icon={FaClipboardList} label='My Lists' address='my-lists'/>
        </>
    );
};

export default HostMenu;