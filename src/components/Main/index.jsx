import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setProducts, setProductsList } from "../../store/agencySlice.js";

import Products from "../Products/index.jsx";
import CategoryTabs from "../CategoryTabs/index.jsx";

import productData from "../../const/products.json"
import productDataMore from "../../const/products2.json"


import "./style.scss";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [сategoriesProduct, setCategoriesProduct] = useState([]);
  const [btnColor, setBtnColor] = useState("main");

  const products = useSelector((state) => state.agency.products);
  const productsList = useSelector((state) => state.agency.productsList);

  dispatch(setProducts(productData));

  products.forEach((item) =>
    !сategoriesProduct.includes(item.category)
      ? setCategoriesProduct([...сategoriesProduct, item.category])
      : null
  );

  useEffect(() => {
    navigate("/");
    dispatch(setProductsList(products));
  }, [products, dispatch]);

  const showAll = () => {
    navigate("/");
    setBtnColor("main");
    dispatch(setProductsList(products));
  };

  const changeCategory = (name) => {
    navigate(`/category/${name}`);
    setBtnColor(`tab+${name}`);
    dispatch(setProductsList(products.filter((item) => item.category === name)));
  };

  const showMoreProduct = () => {
    dispatch(setProductsList([...productsList, ...productDataMore]));
  }

  return (
    <main>
      <div className="wrapper">
        <CategoryTabs
          btnColor={btnColor}
          setBtnColor={setBtnColor}
          сategoriesProduct={сategoriesProduct}
          setCategoriesProduct={setCategoriesProduct}
          showAll={showAll}
          changeCategory={changeCategory}
        />
        <Products
          changeCategory={changeCategory}
        />
        <button onClick={() => showMoreProduct()} className="btn-more">LOAD MORE</button>
      </div>
    </main>
  );
};

export default Main;