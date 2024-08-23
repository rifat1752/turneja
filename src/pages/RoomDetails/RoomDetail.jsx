import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet";
import Heading from "../../components/Shared/Heading";
import Roominfo from "./Roominfo/Roominfo";
import RoomReserve from "./RoomReserve/RoomReserve";

const RoomDetail = () => {

    const room = useLoaderData();
  
  
    return (
        <Container>
           <Helmet><title>{room.title}</title></Helmet>
           <div className="max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="flex-col  gap-6">
                <Heading title={room?.title} subtitle={room?.location}></Heading>
                <div className="aspect-square h-[60vh]
            w-full 
            relative 
            overflow-hidden 
            rounded-xl group">
                <img className=" object-cover 
              h-full 
              w-full 
              group-hover:scale-110
              transition" src={room?.image} alt="" />
                </div>
            </div>
            <div className=" grid grid-cols-1 mt-5 lg:grid-cols-7 gap-8">
            <div className="col-span-4">
                 {/* room info */}
                <Roominfo room={room}></Roominfo>
               
            </div>
            <div className="col-span-3 flex justify-center mt-5 order-first lg:order-last">
              
            <RoomReserve room={room}></RoomReserve>
            </div>
            </div>
           </div>
        </Container>
    );
};

export default RoomDetail;