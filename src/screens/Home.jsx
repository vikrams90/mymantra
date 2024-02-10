import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Hero from "../component/Hero";
import Category from "../component/Category";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
