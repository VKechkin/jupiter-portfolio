import React from "react";

import "./style.scss";

const Product = ({ product, changeCategory }) => {
  const { category, title, image } = product

  return (
    <div
      className={"product-container"}
      style={{
        backgroundImage: `url(/assets/${image}.png)`
      }}>
      <div className="info-product">
        <button onClick={() => changeCategory(category)} className="btn-categories">{category}</button>
        <div className="title-product" >{title}</div>
      </div>
    </div>
  );
};

export default Product;
