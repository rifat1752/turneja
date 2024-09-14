import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import  Loader from "../Shared/Loader"
import { getRooms } from "../../api/rooms";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  useEffect(() => {
    setLoading(true)
    getRooms()
      .then((data) => {
        if (category) {
          const filteredRoom = data.filter(
            (room) => room.category === category
          );
          setRooms(filteredRoom);
        } else {
          setRooms(data);
        }
        setLoading(false);
      });
  }, [category]);
  console.log(rooms)
  if(loading) return <>
  <div className="w-full">
  <Loader></Loader>
    </div></>
  // console.log('rooms :',rooms)
  return (
    <div className="my-10 w-full ">
      {/* <h1 className="text-6xl font-bold"> Cart : {rooms?.length}</h1> */}
    
        {rooms && rooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   xl:grid-cols-4 place-content-center  gap-8">
            {rooms.map((room) => (
              <Card key={room._id} room={room}></Card>
            ))}
          </div>
        ) : (
          <div className=" flex justify-center  items-center  min-h-[calc(100vh-300px)]">
            <Heading
              center={true}
              title={"No Rooms Available"}
              subtitle={"Select other Categories"}
            ></Heading>
          </div>
        )}
      
    </div>
  );
};

export default Rooms;
