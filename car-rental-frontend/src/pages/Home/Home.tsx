import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SearchBox from "../../components/SearchBox";
import FeaturedCars from "../../components/FeaturedCars";
import WhyChooseUs from "../../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <FeaturedCars />
      <WhyChooseUs />
    </>
  );
};

export default Home;