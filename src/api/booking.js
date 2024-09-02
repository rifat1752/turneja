import axiosSecure from "."


export const createPaymentIntent = async (price)=>{
    const {data}= await axiosSecure.post('/create-payment-intent', price)
    return data;
}

//save booking info
export const saveBookingInfo = async (paymentInfo)=>{
    const {data}= await axiosSecure.post('/bookings',paymentInfo)
    return data;

}

//patch method
export const  updateStatus= async (id,status) => {
    const {data}= await axiosSecure.patch(`/rooms/status/${id}`, {status})
    return data;

}

// booking get
export const getBookings = async email => { 
    const { data } = await axiosSecure.get(`/bookings?email=${email}`)
    return data
  }

  export const getHostBookings = async email => { 
    const { data } = await axiosSecure.get(`/bookings/host?email=${email}`)
    return data
  }

