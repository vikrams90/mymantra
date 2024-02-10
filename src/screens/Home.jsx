import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Hero from "../component/Hero";
import Category from "../component/Category";

const Home = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Home;
