import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import SearchBox from "../../components/home/SearchBox";
import FeaturedCars from "../../components/home/FeaturedCars";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

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
      <Footer />
    </>
  );
};

export default Home;