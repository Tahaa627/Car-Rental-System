import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SearchBox from "../../components/SearchBox";
import FeaturedCars from "../../components/FeaturedCars";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <FeaturedCars />
    </>
  );
};

export default Home;