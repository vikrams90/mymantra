import React from "react";
import { category } from "../fakedata";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <>
      <div>
        <h1 className='shop-text text-4xl py-6 font-bold text-center'>
          SHOP BY CATEGORY
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
        {category.map((item) => (
          <CategoryItem />
        ))}
      </div>
    </>
  );
};
export default Category;
