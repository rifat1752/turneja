
import axiosSecure from "."

//save user in database
export const saveUser= async user =>{
    const  currentUser ={
        email: user.email,
        role: 'guest',
        status: 'verified'
    }
    const {data} = await axiosSecure.put(`/users/:${user?.email}`, currentUser)
    return data;
};

//token
export const getToken = async email => {
    const {data} = await axiosSecure.post(`/jwt`, email)
    console.log("token recieve form server", data);
    return data;
}
// Clear token 
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data
  }

  //user role
  export const getRole = async email=>{
    const {data} =await axiosSecure(`/user/${email}`)
    return data.role
    
  }