import axios from "axios";
import { clearCookie } from "./auth";



const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

//interceptor
axiosSecure.interceptors.response.use(response=>response,async (error)=>
    {console.log('error in interceptor', error.response)
        if(error.response && 
            (error.response.status === 401 || error.response.status === 403) ){
                await clearCookie()
                window.location.replace('/login')
            }
            return Promise.reject(error)
    })

export default axiosSecure;
