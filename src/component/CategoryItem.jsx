import React from "react";

const CategoryItem = () => {
  return (
    <div className='card flex flex-col items-center w-[250px] h-[300px] cursor-pointer'>
      <div className='h-2/3'>
        <img src='' alt='' />
      </div>
      <div className='flex w-1/3 flex-col justify-center items-center gap- text-white'>
        <h1 className='text-lg'>{"title"}</h1>
        <p className='font-bold text-2xl'>{}% OFF</p>
        <button className='text-lg'>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
