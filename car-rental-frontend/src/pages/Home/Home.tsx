import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SearchBox from "../../components/SearchBox";
import FeaturedCars from "../../components/FeaturedCars";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;