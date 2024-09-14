import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import axiosSecure from '../../api';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import animation2 from '../../assets/lottie/login2.json'


import Lottie from 'lottie-react';


const Login = () => {
  useEffect(()=>{
    Aos.init()
},[])
  const {signIn,signInWithGoogle,loading, setLoading} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';



  const handleSignInSubmit = async event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email?.value;
    const password = form.password?.value;
 

    try{
      const result = await signIn(email, password)
      
     
  
     
      const tokenResponse = await getToken(result?.user?.email)
      // 
      console.log(tokenResponse)
     navigate(from,{replace:true})
      toast.success("Sign In Successful")
     
    }
    catch(err){
      console.log(err);
      toast.error("Email or Password incorrect");
      setLoading(false)
    }
    form.reset();
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const { user } = result;
      
      // Check if user exists before creating a new one
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
      
      navigate(from, { replace: true });
      toast.success("SignIn Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  


  return (
    <div className='flex justify-center lg:justify-around items-center min-h-screen my-5'>
      <div
       data-aos="fade-right"
        data-aos-easing="linear"
       data-aos-duration="500" className='hidden lg:block lg:w-5/12  '>
        <Lottie animationData={animation2}></Lottie>
      </div>
      <div
       data-aos="zoom-in"
       data-aos-easing="linear"
      data-aos-duration="500" className='lg:w-5/12 border border-purple-600 shadow-lg shadow-slate-500 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSignInSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
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
                autoComplete='current-password'
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
              className='btn0 btn1 z-0 bg-s rounded-md  font-semibold'
            >
            {
            loading? <ImSpinner9 className='animate-spin m-auto'/>: ' Sign In'
           }
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-lg transition ease-linear duration-300 hover:border-purple-500 cursor-pointer'>
          <FcGoogle size={32} />

          <p>Sign In with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
