import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const item = products.filter((item) => item._id === id)[0];
  console.log(item);
  return (
    <div className='w-full flex flex-col gap-1 items-center cursor-pointer'>
      <div className='w-[200px]'>
        <img src={item.prodImage1} alt='' />
      </div>
      <h2 className='text-center text-xs'>{item.prodName}</h2>
      <p>{item.prodPrice}</p>
      <p className='text-center'>{item.prodDescription}</p>
    </div>
  );
};

export default SingleProduct;
