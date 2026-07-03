import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SearchBox from "../../components/SearchBox";
import FeaturedCars from "../../components/FeaturedCars";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;