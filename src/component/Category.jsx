import React from "react";
import { category } from "../fakedata";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <>
      {category.map((item) => (
        <CategoryItem />
      ))}
    </>
  );
};
export default Category;
