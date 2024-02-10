import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Myntra-Logo.png";
import {
  FaBagShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
const Nav = () => {
  const handleIn = (e) => {
    e.target.parentElement.classList.remove("bg-[#f5f5f6]");
    e.target.parentElement.classList.add("bg-[#ffffff]");
    // e.target.parentElement.classList.add("b");
  };
  const handleOut = (e) => {
    e.target.parentElement.classList.remove("bg-[#ffffff]");
    e.target.parentElement.classList.add("bg-[#f5f5f6]");
  };
  return (
    <nav className='bg-white sticky top-0 w-full z-40 flex justify-center items-center gap-14 py-4'>
      <div className='mr-4'>
        <NavLink to={"/"}>
          {" "}
          <img src={logo} className='w-[50px] h-[50px]' alt='' />
        </NavLink>
      </div>

      <div className='categories font-bold flex gap-10 text-[#282c3f] text-sm'>
        <NavLink to={"/shop/men"} href=''>
          MEN
        </NavLink>
        <NavLink to={"/shop/women"} href=''>
          WOMEN
        </NavLink>
        <NavLink to={"/shop/kids"}>KIDS</NavLink>
        <NavLink href='/shop/home'>HOME & LIVING</NavLink>
        <NavLink href=''>BEAUTY</NavLink>
        <NavLink href=''>STUDIO</NavLink>
      </div>

      <div className='flex items-center bg-[#f5f5f6] border-[#f5f5f6] border-[2px] rounded-md border-[solid] w-[500px] py-[6px] px-[10px] '>
        <button className='w-10 h-7 bg-transparent flex justify-center items-center'>
          <FaMagnifyingGlass color='#696e79' />
        </button>
        <input
          onFocus={(e) => handleIn(e)}
          onBlur={(e) => handleOut(e)}
          type='text'
          placeholder='Search for produts, brands and more '
          className='bg-transparent text-sm w-11/12 border-none outline-none font-light text-[#696e79]'
        />
      </div>

      <div className='icons flex gap-4'>
        <NavLink
          to={""}
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
    </nav>
  );
};

export default Nav;
