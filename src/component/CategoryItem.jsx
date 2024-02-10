import React from "react";

const CategoryItem = () => {
  return (
    <div className='card w-[250px] h-[300px] cursor-pointer'>
      <img src='' alt='' />
      <div className='flex flex-col justify-center items-center gap- text-white'>
        <h1 className='text-lg'>{"title"}</h1>
        <p className='font-bold text-2xl'>{}% OFF</p>
        <button className='text-lg'>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
