import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { imageUpload } from '../../api/utilities';
import useAuth from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { ImSpinner9 } from "react-icons/im";
import axiosSecure from '../../api';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";



const SignUp = () => {

  useEffect(()=>{
    Aos.init()
},[])

const {createUser,signInWithGoogle, updateUserProfile,loading} = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    const image = form.image?.files[0];
 

    try{
      const imageData = await imageUpload(image);
      const result = await createUser(email, password)
      await updateUserProfile(name, imageData?.data?.display_url)
     
  
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)
      //result.user.email
      //token
      console.log(result?.user?.email)
      const tokenResponse = await getToken(result?.user?.email)
      // 
      console.log(tokenResponse)
     navigate('/')
      toast.success("SignUp Successful")
      
    }
    catch(err){
      console.log(err);
      toast.error(err?.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      
      // Check if user exists before creating a new one
      const { user } = result;
      const existingUserResponse = await axiosSecure.get(`/user/${user.email}`);
  
      if (!existingUserResponse.data) {
        // If user does not exist, save to DB
        const dbResponse = await saveUser(user);
        console.log("New user created in DB: ", dbResponse);
      } else {
        console.log("User already exists: ", existingUserResponse.data);
      }
  
      // Generate token for the existing or new user
      const tokenResponse = await getToken(user.email);
      console.log("Token received from server: ", tokenResponse);
      
      navigate('/');
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  



  return (
    <div className='flex justify-center lg:justify-around my-5 items-center min-h-screen'>
       <div
        data-aos="fade-right"
        data-aos-easing="linear"
       data-aos-duration="1000"
        className='hidden lg:block lg:w-5/12  '>
        <img src="https://i.ibb.co.com/g7gzY70/login.jpg" alt="" />
      </div>
      <div
       data-aos="zoom-in"
       data-aos-easing="linear"
      data-aos-duration="1000"
       className='lg:w-5/12 border border-purple-600 shadow-lg shadow-slate-500 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Turneja</p>
        </div>
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-400 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-400 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-400 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button 
              type='submit'
              className='btn0 btn1 z-0 rounded-md 
      font-semibold'
            >
           {
            loading? <ImSpinner9 className='animate-spin m-auto'/>: ' Sign Up'
           }
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div  onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-lg transition ease-linear duration-300 hover:border-purple-500 cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp;