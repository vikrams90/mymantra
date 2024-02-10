import React from "react";
import Hero from "../component/Hero";
import Category from "../component/Category";
import FixedEl from "../component/FixedEl";
import AppDownload from "../component/AppDownload";

const Landing = () => {
  return (
    <>
          <Hero />
      <Category />
      <FixedEl />
      <AppDownload/>
    </>
  );
};

export default Landing;
