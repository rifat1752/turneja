import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import HostModal from '../../Modal/HostRequestModal'
import { becomeHost } from '../../../api/auth'
import toast from 'react-hot-toast'
import useRole from '../../../hooks/useRole'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user,logOut } = useAuth()
  const [role]= useRole()
  const closeModal =()=>{
    setIsModalOpen(false)
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
    finally{setIsModalOpen(false)}
 }


  return (
    <div className='relative'>
      <div className='flex flex-row  items-center gap-3'>
        {/* Become A Host btn */}
        {
          (!user || !role || role=== 'guest') && (
            <div  className='hidden md:block'>
          <button onClick={()=>setIsModalOpen(true)} 
          disabled={!user}
          className='disabled:cursor-not-allowed cursor-pointer w-40 h-10 px-6  text-sm font-semibold rounded-full text-purple-600   block   profile-button profile-button1'>
            Host your home
          </button>
        </div>
          )
        }

        {/* tablet to dekstop */}
       <div className=' md:block hidden  bg-white  text-sm'>
          <div className='flex  cursor-pointer'>
            <Link
              to='/'
              className='block  mx-3 px-1 my-3 hover:text-purple-700  transition font-semibold'
            >
              Home
            </Link>

            {
              user?
              <>
              <Link  to='/dashboard'
              className='mx-3 px-1 my-3 hover:text-purple-700   transition font-semibold'>
              Dashboard
              </Link>
              <div  onClick={logOut}
              className='mx-3 px-1 my-3  hover:text-purple-700  transition font-semibold'>
              Log Out
              </div>
              </>
              :<>
              <Link
              to='/login'
              className='mx-3 px-1 my-3 hover:text-purple-700  transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='mx-3 px-1 my-3  hover:text-purple-700  transition font-semibold'
            >
              Sign Up
            </Link></>
            }
          </div>
        </div>


        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-2  md:py-1 md:px-1 border-[1px]  md:hover:shadow-none border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu className='md:hidden block'/>
          <div className='hidden  md:block'>
            {/* Avatar */}
            <img
              className='h-8 w-8 rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
             
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute block md:hidden rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-purple-500 hover:text-white transition font-semibold'
            >
              Home
            </Link>

            {
              user?
              <>
              <Link  to='/dashboard'
              className='px-4 py-3 hover:bg-purple-500 hover:text-white transition font-semibold'>
              Dashboard
              </Link>
              <div  onClick={logOut}
              className='px-4 py-3 hover:bg-purple-500 hover:text-white transition font-semibold'>
              Log Out
              </div>
              </>
              :<>
              <Link
              to='/login'
              className='px-4 py-3 hover:bg-purple-500 hover:text-white transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='px-4 py-3 hover:bg-purple-500 hover:text-white transition font-semibold'
            >
              Sign Up
            </Link></>
            }
          </div>
        </div>
      )}
      <HostModal modalHandler={modalHandler} isOpen={isModalOpen} closeModal={closeModal} ></HostModal>
    </div>
  )
}

export default MenuDropdown
