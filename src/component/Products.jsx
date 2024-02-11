import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Features/productSlice";
import Product from "./Product";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const data = categories.filter((item) => item.catName === category)[0];
  const { products } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts(data._id));
  }, []);
    if (!products || products.length === 0)
        return <h2>No data to show</h2>;
  return (
    <ul className='flex gap-6 flex-wrap px-8'>
      {products.map((item) => (
        <Product item={item}></Product>
      ))}
    </ul>
  );
};

export default Products;
