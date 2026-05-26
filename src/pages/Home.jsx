
import Hero from "../components/Hero";
import BrandsTicker from "../components/BrandsTicker";
import Features from "./Features";
import Stats from "../components/Stats";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "../components/Testimonials"; // Keep this import
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChooes";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandsTicker />
      <Features />
      <Stats />
      <Portfolio />
      <WhyChoose/>
      <About />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;