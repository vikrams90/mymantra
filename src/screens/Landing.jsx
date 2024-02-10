import React from "react";
import Hero from "../component/Hero";
import Category from "../component/Category";
import FixedEl from "../component/FixedEl";
import AppDownload from "../component/AppDownload";
import Sale from "../component/Sale";

const Landing = () => {
  return (
    <main className=''>
      <Sale />
      <Hero />
      <Category />
      <FixedEl />
      <AppDownload />
    </main>
  );
};

export default Landing;
