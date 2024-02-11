import React from "react";
import { useParams } from "react-router-dom";
import Products from "../component/Products";

const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <section><Products category={category} /></section>
    </>
  );
};

export default CategoryPage;
