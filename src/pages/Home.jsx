import React from "react";
import HeroComponent from "../components/HeroComponent";
import Grid from "../components/Grid";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <div>
      <HeroComponent />
      <Grid />
      <Testimonials />
    </div>
  );
}

export default Home;
