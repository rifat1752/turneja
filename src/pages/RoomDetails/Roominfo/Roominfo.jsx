
const Roominfo = ({room}) => {
    return (
        <div className="">
         <div className="py-5 flex flex-col gap-3 border-b-2">
            <div className="flex gap-3 items-center">
               <div className="text-2xl font-bold">Hosted By {room?.host?.name}</div>
                <img className="w-10 rounded-full" src={room?.host?.image} alt="" />
            </div>
            <div className="flex gap-2 md:gap-5 text-slate-700 font-bold">
                <p>{room.guests} guests</p>
                <p> {room.bedrooms} bedrooms</p>
                <p>{room.bathrooms} bathrooms</p>
            </div>
         </div>
         <div className="text-base text-justify font-medium text-slate-500">
                <div className="">{room.description}</div>
         </div> 
        </div>
    );
};

export default Roominfo;