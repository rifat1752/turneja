/* eslint-disable react/prop-types */
import {  differenceInDays, formatDistance } from "date-fns";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import Calender from "../Calender/Calender";
import BookingModal from "../../../components/Modal/BookingModal";
import useAuth from "../../../hooks/useAuth";



const RoomReserve = ({room}) => {
    let [isOpen, setIsOpen] = useState(false)
    const {user} = useAuth()
    console.log("for id room",room)

    const close =()=>{
        setIsOpen(false)
    }
    const [value,setValue]= useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'slection'     
    })
    const totalDays = parseInt(
        formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
        const totalPrice = totalDays * room?.price
        const handleDateChange = ranges => {
            console.log(ranges)
            setValue({
              startDate: new Date(room?.from),
              endDate: new Date(room?.to),
              key: 'selection',
            })
          }
    const [bookingInfo, setBookingInfo]= useState(
    {
        guest:{
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        },
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to: value.endDate,
        from: value.startDate,
        title:room?.title,
        roomId: room?._id,
        roomImage: room?.image, 
    }
    )
    console.log("bookinfo",bookingInfo)
   
    return (
        <div className=" rounded-xl border-[1px] overflow-hidden p-2 border-neutral-200">
            <h1 className="text-2xl ml-2 font-bold py-2">${room?.price}<span className="text-lg font-normal">/night</span></h1>
            <hr />
            <div className='flex justify-center'>
        <Calender  handleDateChange={handleDateChange} value={value} />
      </div> 
            <hr />
            <div className="p-4">
                <Button disabled={room.host.email === user.email  || room.booked} onClick={()=>setIsOpen(true)} label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 text-lg font-semibold flex flex-row justify-between">
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>
            <BookingModal bookingInfo={bookingInfo} close={close} isOpen={isOpen}></BookingModal>
        </div>
    );
};

export default RoomReserve;