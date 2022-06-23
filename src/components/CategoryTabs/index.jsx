import React from "react";

import { v4 } from "uuid";

import "./style.scss";

const CategoryTabs = ({
  btnColor,
  сategoriesProduct,
  showAll,
  changeCategory,
}) => {

  return (
    <div className="tabs-wrapper">
      <div
        className={btnColor === "main" ? "pressed-tab" : "tab"}
        onClick={() => showAll()}
      >
        Show All
      </div>
      {сategoriesProduct.map((item) => (
        <div
          value={item}
          name={item}
          className={btnColor === `tab+${item}` ? "pressed-tab" : "tab"}
          key={`id-${v4()}`}
          onClick={() => changeCategory(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
