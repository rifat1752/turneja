import axiosSecure from "."

// all Rooms
export const  getRooms = async ()=>{
    const {data} =await axiosSecure('/rooms')
    return data
}

// all rooms for host 
export const getHostRooms =async (email)=>{
    const {data} = await axiosSecure(`/room/${email}`)
    return data
}
// single room

export const getSingleRoom = async id =>{
    const {data} = await axiosSecure(`/room/${id}`)
    return data
}

// add room
export const addRoom = async (roomData) =>{
    const {data } = await axiosSecure.post('/rooms',roomData);
    return data
}

 