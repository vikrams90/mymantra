import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-2c8f-47f8-938d-85617a3e75e91706788625897-FLAT-400-Off-on-1st-Purchase-Strip-----3.jpg'
        alt=''
      />
      <div className='flex'>
        <div>
          <NavLink to={"/shop/men"}>
            <img
              src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/827b697d-155a-4895-92ad-75fbb07ca8a01707154477940-Desktop_Hp_01.jpg'
              alt=''
            />
          </NavLink>
        </div>
        <div>
          <NavLink to={"/shop/women"}>
            <img
              src='https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/f6857071-a235-49de-a659-1ab08bcd41d11707154477945-Desktop_Hp_02.jpg'
              alt=''
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
