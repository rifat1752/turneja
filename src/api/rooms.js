import axiosSecure from "."

// all Rooms
export const  getRooms = async ()=>{
    const {data} =await axiosSecure('/rooms')
    return data
}

// all rooms for host 
export const getHostRooms =async (email)=>{
    const {data} = await axiosSecure.get(`/room/${email}`)
    return data
}
// single room

export const getSingleRoom = async id =>{
    const {data} = await axiosSecure.get(`/rooms/${id}`)
    return data
}

// add room
export const addRoom = async (roomData) =>{
    const {data } = await axiosSecure.post('/rooms',roomData);
    return data
}

// Delete a room
export const deleteRoom = async id => {
    const { data } = await axiosSecure.delete(`/rooms/${id}`)
    return data
  }
  // update a room
  export const updateRoom = async (roomData, id) => {
    const { data } = await axiosSecure.put(`/rooms/${id}`, roomData)
    return data
  }
 