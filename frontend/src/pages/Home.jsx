import React from "react";
import { Nav } from "../componants/Nav";
import { Fotter } from "../componants/Fotter";
import AboutUs from "../componants/AboutUs";
// import { CatAnimation } from './CatAnimation'
export const Home = () => {
  return (
    <>
      <Nav></Nav>
      <AboutUs />
      <Fotter></Fotter>
    </>
  );
};
