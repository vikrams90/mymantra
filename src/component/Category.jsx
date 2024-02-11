import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../Features/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  //   console.log(categories);
  useEffect(() => {
    dispatch(fetchdata());
  }, []);
  return (
    <>
      <div>
        <h1 className='shop-text text-4xl py-6 font-bold text-center'>
          SHOP BY CATEGORY
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {categories.map((item, index) => (
          <CategoryItem key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Category;
