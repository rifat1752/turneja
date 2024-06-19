import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import  Loader from "../Shared/Loader"
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  useEffect(() => {
    setLoading(true)
    fetch("/rooms.json")
      .then((res) => res.json())
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
  if(loading) return <Loader></Loader>
  // console.log('rooms :',rooms)
  return (
    <div className="mt-10">
      {/* <h1 className="text-6xl font-bold"> Cart : {rooms?.length}</h1> */}
      <Container>
        {rooms && rooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {rooms.map((room) => (
              <Card key={room._id} room={room}></Card>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
            <Heading
              center={true}
              title={"No Rooms Available"}
              subtitle={"Select other Categories"}
            ></Heading>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Rooms;
