import React from "react";

import { useSelector } from "react-redux";

import { v4 } from "uuid";

import Product from "../Product";

import "./style.scss";

const Products = ({ changeCategory }) => {

  const productsList = useSelector((state) => state.agency.productsList);

  return (
    <div className="product-wrapper">
      {productsList.map((product) => (
        <Product
          key={`id-${v4()}`}
          product={product}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
};

export default Products;
