import Calender from "../Calender/Calender";


const RoomReserve = ({room}) => {
    // console.log("calender room",room)
    return (
        <div className=" rounded-xl border-[1px] overflow-hidden p-2 border-neutral-200">
            <h1 className="text-2xl ml-2 font-bold py-2">${room?.price}<span className="text-lg font-normal">/night</span></h1>
            <hr />
            <div className=" ">
            <Calender></Calender>
            </div>
        </div>
    );
};

export default RoomReserve;