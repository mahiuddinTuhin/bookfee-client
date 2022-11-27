import React from "react";
import AllCategory from "./Hero/AllCategory";
import Pricing from "./Pricing";
import Sponsors from "./Sponsors";
import Statistics from "./Statistics";
import Subscribe from "./Subscribe";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <AllCategory />
      <Statistics />
      <Pricing />
      <Team />
      <Testimonial />
      <Subscribe />
      <Sponsors />
    </div>
  );
};

export default Home;
