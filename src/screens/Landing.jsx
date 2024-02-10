import React from "react";
import Hero from "../component/Hero";
import Category from "../component/Category";
import FixedEl from "../component/FixedEl";
import AppDownload from "../component/AppDownload";

const Landing = () => {
  return (
    <main className=''>
      <Hero />
      <Category />
      <FixedEl />
      <AppDownload />
    </main>
  );
};

export default Landing;
