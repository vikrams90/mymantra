import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../component/Product";

const SearchResult = () => {
  const { products } = useSelector((state) => state.product);
  if (!products || products.length === 0) return <div>no result found</div>;

  return (
    <ul className='flex gap-6 flex-wrap px-8'>
      {products.map((item) => (
        <Product item={item}></Product>
      ))}
    </ul>
  );
};

export default SearchResult;
