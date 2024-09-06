
import Rooms from "../../components/Rooms/Rooms";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories/Categories.jsx";

const Home = () => {
  const rooms = useLoaderData()
  console.log(rooms);
  return (
    <div>
      <Helmet><title>Turneja</title></Helmet>
      {/* Categories section */}
      <Categories></Categories>
      {/* room  */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
