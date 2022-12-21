import React from "react";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bannerbottom from "../components/layout/Bannerbottom";
import Newarivals from "../components/layout/Newarivals";

const Home = () => {
  return (
    <div>
      <Banner />
      <Bannerbottom />
      <Advertise />
      <Newarivals />
    </div>
  );
};

export default Home;
