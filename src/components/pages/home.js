import React from "react";
import HeroSection from "../heroSection";
import "../../App.css";
import Cards from "../cards";
import Footer from "../footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
