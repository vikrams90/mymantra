import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../Features/wishlistSlice";

const Product = ({ item }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.classList.contains("wishlist")) {
      dispatch(addItem(item));
    } else navigate(`/product/${item._id}`);
  };

  const handleSave = () => {};

  const handleHoverIn = () => {
    setShow(true);
  };

  const handleHoverOut = () => {
    setShow(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      className='w-[180px] flex flex-col gap-3 cursor-pointer'
    >
      <div className='w-full relative'>
        <img className='relative' src={item.prodImage1} alt='' />
        <p className='absolute bottom-1 left-1 px-2 py-1 bg-[#ffffffc7] flex justify-center items-center gap-1'>
          <FaStar className='text-[#89c4cf] text-xs' /> {item.rating} |{" "}
          {item.prodReview.length}
        </p>
        {show ? (
          <div className='wishlist absolute text-lg bg-white w-full z-30 bottom-0 right-0 py-2'>
            <button className='wishlist' onClick={handleSave}>
              Add to wishlist
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='flex flex-col gap-1 px-2'>
        <h2 className='text-xs'>{item.prodName}</h2>
        {/* <p className='text-center'>{item.prodDescription.slice(0, 50) + "..."}</p> */}
        <p className='text-xs'>{item.prodPrice} Rs</p>
      </div>
    </div>
  );
};

export default Product;
