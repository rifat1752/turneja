
import Rooms from "../../components/Rooms/Rooms";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories/Categories.jsx";
import Banner from "../../components/Shared/Banner/Banner.jsx"
import Container from "../../components/Shared/Container.jsx";

const Home = () => {
  const rooms = useLoaderData()
  console.log("banner rooms",rooms);
  return (
    <div>
      <Helmet><title>Turneja</title></Helmet>
      {/* Categories section */}
    <Banner></Banner>
     <Container>
     <div className="flex flex-col">
     <Categories ></Categories>
      {/* room  */}
      <Rooms></Rooms>
     </div>
     </Container>
    </div>
  );
};

export default Home;
