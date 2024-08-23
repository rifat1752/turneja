/* eslint-disable react/prop-types */
import {  differenceInDays } from "date-fns";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import Calender from "../Calender/Calender";



const RoomReserve = ({room}) => {
    const [value,setValue]= useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'slection'     
    })
    const totalDays = differenceInDays(new Date(room.to), new Date(room.from))
    const totalPrice = totalDays*room?.price;
   
    return (
        <div className=" rounded-xl border-[1px] overflow-hidden p-2 border-neutral-200">
            <h1 className="text-2xl ml-2 font-bold py-2">${room?.price}<span className="text-lg font-normal">/night</span></h1>
            <hr />
            <div className='flex justify-center'>
        <Calender value={value} />
      </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 text-lg font-semibold flex flex-row justify-between">
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>
        </div>
    );
};

export default RoomReserve;