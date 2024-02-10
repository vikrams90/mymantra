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
            : "w-[530px] h-[280px] bg-amber-300 fixed right-0 bottom-36"
        }
      >
        slfjlj
      </div>
    </div>
  );
};

export default FixedEl;
