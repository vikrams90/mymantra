import React from "react";
import Hero from "../component/Hero";
import Category from "../component/Category";
import { FaTriangleExclamation } from "react-icons/fa6";

const Landing = () => {
  return (
    <>
      <Hero />
      <Category />
      <div className='w-12 bg-slate-400 fixed right-0 bottom-36'>
        <span className='flex flex-col gap-5 justify-center items-center'>
          <span className='py-2'>
            <div></div>
          </span>
          <p className='[writing-mode:vertical-rl] rotate-180 text-2xl px-2 py-4 text-white font-bold'>
            FLAT ₹400 OFF
          </p>
        </span>
      </div>
    </>
  );
};

export default Landing;
