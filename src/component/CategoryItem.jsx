import React from "react";
import { NavLink } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <NavLink
      to={`/shop/${item.catName}`}
      className='card flex flex-col items-center w-[200px] h-[300px] cursor-pointer'
    >
      <div className='flex-grow-1 p-2 overflow-hidden'>
        <img className='w-full h-[300px]' src={item.catImage} alt='image' />
      </div>
      <div className='flex h-1/3 flex-col justify-center items-center gap- text-white'>
        <h1 className='text-lg'>{item.catName}</h1>
        {/* <p className='font-bold text-2xl'>{}% OFF</p> */}
        <button className='text-lg'>Shop Now</button>
      </div>
    </NavLink>
  );
};

export default CategoryItem;
