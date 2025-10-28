import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import PropertyCard from "../Components/PropertyCard";
import Choose from "../Components/Choose";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import Agent from "../Components/Agent";
import BackToTop from "../Components/BackToTop";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <PropertyCard />
      <Choose />
      <Agent />
      <Testimonials />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
