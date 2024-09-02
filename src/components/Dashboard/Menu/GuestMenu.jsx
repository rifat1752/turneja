import { useState } from "react";
import useRole from "../../../hooks/useRole";
import MenuItem from "../Sidebar/MenuItem";
import { FaCheckSquare } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import useAuth from "../../../hooks/useAuth";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../api/auth";
import toast from "react-hot-toast";


const GuestMenu = () => {
 const [role] = useRole()
 const {user} = useAuth()
 const [isOpen,  setIsOpen] = useState(false)
 const closeModal= ()=>{
    setIsOpen(false)
 }
 const modalHandler =async()=>{
    try{
      const data = await becomeHost(user?.email)
      console.log(data)
      if (data.modifiedCount>0){
        toast.success("Your request has been sent!")
      }
      else{
        toast.success("Please, Wait for approve")
      }
      
    }
    catch (err) {
      console.log(err.message)
    }
    finally{setIsOpen(false)}
 }
    return (
        <>
        <MenuItem icon={FaCheckSquare} label='My Bookings' address='my-bookings'/>
        {role === 'guest' && (
        <div
          onClick={() => setIsOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <TiUserAdd className='w-5 h-5 text-purple-600'/>
          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}
      <HostModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler}></HostModal>
        </>
    );
};

export default GuestMenu;