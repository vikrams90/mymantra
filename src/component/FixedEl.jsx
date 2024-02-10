import React, { useState } from "react";

const FixedEl = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = (e) => {
    console.log(hidden);
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className={
          hidden
            ? "w-12 bg-[#535766] fixed right-0 bottom-36"
            : "w-12 bg-[#535766] fixed right-[530px] bottom-36"
        }
      >
        <span className='flex h-[280px] flex-col gap-5 justify-center items-center'>
          <span className='py-4'>
            <div
              className={hidden ? "triangle rotate-90" : "triangle -rotate-90"}
            ></div>
          </span>
          <p className='[writing-mode:vertical-rl] rotate-180 text-2xl px-2 py-4 text-white font-bold'>
            FLAT ₹400 OFF
          </p>
        </span>
      </div>
      <div
        className={
          hidden
            ? "hidden"
            : "w-[530px] h-[280px] bg-[linear-gradient(270deg,#fef9e5,#fde3f3)] fixed right-0 bottom-36"
        }
      >
        <div className='border-solid border-b-2 border-[#d1d1d1] flex py-2'>
          <div className='flex flex-col px-6 py-3 justify-between w-1/2'>
            <div className='py-5 text-[#3e4152]'>
              <p>Avail flat</p>
              <h1 className='text-5xl font-bold'>400 OFF</h1>
            </div>
            <div className='text-[#3e4152]'>
              <p className='text-sm font-bold'>Coupon Code:MYNTRA400</p>
              <p className='text-xs'>Applicable on your first order</p>
            </div>
          </div>
          <div className='flex flex-col justify-center py-3 gap-5 w-1/2'>
            <img
              width={150}
              src='https://assets.myntassets.com/assets/images/2023/10/26/fb13132b-b2a4-4e4d-8367-bde180eefe3d1698300150514-Flat_400.jpg'
              alt=''
            />
            <button className='w-44 bg-[#ff3f6c] py-3 text-white'>
              SIGN UP NOW{">"}
            </button>
          </div>
        </div>
        <div className='flex px-3 justify-between py-2'>
          <p>genuine product</p>
          <p>try & buy</p>
          <p>Easy and exchange & returns</p>
        </div>
      </div>
    </div>
  );
};

export default FixedEl;
