import { Helmet } from "react-helmet"
import useAuth from "../../../hooks/useAuth"
import useRole from "../../../hooks/useRole"


const Profile = () => {
    const { user } = useAuth()
    const [role] = useRole()
    console.log(user)
    return (
      <div className='flex justify-center  items-center min-h-screen'>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className=' shadow-lg rounded-2xl sm:w-3/5'>
          <img
            alt='profile'
            src='https://i.ibb.co/dJVxn2W/uwp4257549.jpg'
            className='w-full mb-4 rounded-t-lg h-36'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a href={user.photoURL} className='relative block'>

            <div className="avatar indicator">
  <span className="indicator-item indicator-bottom indicator-end badge text-slate-700 font-semibold badge-warning"> {role && role.toUpperCase()}</span>
  <div className="h-20 w-20 rounded-lg">
  <img
                alt='profile'
                src={user.photoURL}
                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
              />
  </div>
</div>
            </a>
  
            
            <p className='w-full  text-center mt-2  text-xl font-medium text-gray-800 '>
              User Id: <span className="text-base font-normal break-words"> {user.uid}</span>
            </p>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='w-full  q flex flex-row flex-wrap gap-5   items-center justify-between  text-sm text-gray-600 '>
               <div className="flex flex-col gap-5 mx-auto"> 
                <p className='flex flex-row gap-5  break-words'>
                  Name :
                  <span className='font-bold text-black '>
                    {user.displayName}
                  </span>
                </p>
                <p className='flex flex-row gap-7 '>
                   Email:
                  <span className='font-bold text-black '>{user.email}</span>
                </p>
    </div>
                <div className=" mx-auto "> 
                  <button className=' w-44 h-10 px-10 py-2 rounded text-purple-600 cursor-pointer  block mb-2 border border-purple-500 profile-button profile-button1'>
                    Update Profile
                  </button>
                  <button className=' w-44 h-10 px-7 py-2 rounded text-purple-600 cursor-pointer border border-purple-500 profile-button profile-button1'>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Profile