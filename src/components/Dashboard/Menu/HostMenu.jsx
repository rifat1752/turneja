import { MdAddHome } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

const HostMenu = () => {
    return (
        <>
         <MenuItem icon={MdAddHome} label='Add Room' address='add-room'/>
         <MenuItem icon={FaClipboardList} label='My Lists' address='my-lists'/>
         <MenuItem icon={MdOutlineManageAccounts} label='Manage Bookings' address='manage-bookings'/>
        </>
    );
};

export default HostMenu;