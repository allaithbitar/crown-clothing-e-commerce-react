import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContianer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContianer className="homepage">
      <Directory />
    </HomePageContianer>
  );
};

export default HomePage;
