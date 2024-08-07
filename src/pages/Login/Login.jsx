import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';

const Login = () => {
  const {signIn,signInWithGoogle,loading} = useAuth();
  const navigate = useNavigate();


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
     navigate('/')
      toast.success("Sign In Successful")
      
    }
    catch(err){
      console.log(err);
      toast.error(err?.message)
    }
  }

  const handleGoogleSignIn = async ()=>{
    try{
     
      const result = await signInWithGoogle()
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)
      const tokenResponse = await getToken(result?.user?.email)
      // 
      console.log(tokenResponse)
     navigate('/')
      toast.success("SignIn Successful")
      
    }
    catch(err){
      console.log(err);
      toast.error(err?.message)
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen my-5'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
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
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
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
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='btn0 btn1 z-0 rounded-md  font-semibold'
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
