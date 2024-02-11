import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { searchProducts } from "../Features/productSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIn = (e) => {
    e.target.parentElement.classList.remove("bg-[#f5f5f6]");
    e.target.parentElement.classList.add("bg-[#ffffff]");
    // e.target.parentElement.classList.add("b");
  };
  const handleOut = (e) => {
    e.target.parentElement.classList.remove("bg-[#ffffff]");
    e.target.parentElement.classList.add("bg-[#f5f5f6]");
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProducts(search));
      navigate(`search/${search}`);
    }
  };
  return (
    <div className='flex items-center bg-[#f5f5f6] border-[#f5f5f6] border-[2px] rounded-md border-[solid] w-[500px] py-[6px] px-[10px] '>
      <button className='w-10 h-7 bg-transparent flex justify-center items-center'>
        <FaMagnifyingGlass color='#696e79' />
      </button>
      <input
        type='text'
        onFocus={(e) => handleIn(e)}
        onBlur={(e) => handleOut(e)}
        onKeyDown={handleSubmit}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder='Search for produts, brands and more '
        className='bg-transparent text-sm w-11/12 border-none outline-none font-light text-[#696e79]'
      />
    </div>
  );
};

export default Search;
