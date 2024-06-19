import Categories from "./Categories/Categories.Jsx";
import Rooms from "../../components/Rooms/Rooms";
import { Helmet } from "react-helmet";

const Home = () => {
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
