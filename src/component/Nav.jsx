import { NavLink } from "react-router-dom";
import logo from "../assets/Myntra-Logo.png";
import {
  FaBagShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { useState } from "react";
import HoverMenu from "./HoverMenu";
import Search from "./Search";

const Nav = () => {
  const [data, SetData] = useState({
    hidden: true,
    on: "none",
  });

  const handleHover = (e) => {
    if (e.target.classList.contains("men")) {
      SetData({ hidden: false, on: "men" });
    } else if (e.target.classList.contains("women")) {
      SetData({ hidden: false, on: "women" });
    } else if (e.target.classList.contains("beauty")) {
      SetData({ hidden: false, on: "beauty" });
    } else if (e.target.classList.contains("home")) {
      SetData({ hidden: false, on: "home" });
    } else if (e.target.classList.contains("studio")) {
      SetData({ hidden: false, on: "studio" });
    } else if (e.target.classList.contains("kids")) {
      SetData({ hidden: false, on: "kids" });
    }
  };
  const handleHoverOut = (e) => {
    console.log("out");
    SetData({ hidden: true, on: "none" });
  };
  return (
    <nav className='bg-white sticky top-0 w-full z-40 flex justify-center items-center gap-5 py-4'>
      <div className='mr-4'>
        <NavLink to={"/"}>
          <img src={logo} className='w-[50px] h-[50px]' alt='' />
        </NavLink>
      </div>

      <div className='categories font-bold flex gap-10 text-[#282c3f] text-sm'>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          to={"/shop/men"}
          className='men'
        >
          MEN
        </NavLink>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          to={"/shop/women"}
          className='women'
        >
          WOMEN
        </NavLink>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          to={"/shop/kids"}
          className={"kids"}
        >
          KIDS
        </NavLink>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          to='/shop/home'
          className={"home"}
        >
          HOME & LIVING
        </NavLink>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          className={"beauty"}
          to={"/shop/beauty"}
        >
          BEAUTY & SKINCARE
        </NavLink>
        <NavLink
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          className={"studio"}
          to={"/shop/studio"}
        >
          STUDIO
        </NavLink>
      </div>

      <Search />

      <div className='icons flex gap-4'>
        <NavLink
          to={"/auth"}
          className='flex flex-col items-center cursor-pointer gap-1'
        >
          <FaUser size={20} />
          <span className='text-xs '>profile</span>
        </NavLink>
        <NavLink
          to={"/wishlist"}
          className='flex flex-col items-center cursor-pointer gap-1'
        >
          <FaHeart size={20} />
          <span className='text-xs '>wishlist</span>
        </NavLink>

        <NavLink
          to={"/cart"}
          className='flex flex-col items-center cursor-pointer gap-1'
        >
          <FaBagShopping size={20} />
          <span className='text-xs text-center'>Bag</span>
        </NavLink>
      </div>
      <HoverMenu data={data} />
    </nav>
  );
};

export default Nav;
