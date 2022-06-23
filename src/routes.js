import React from "react";
import { Navigate } from "react-router-dom";

import Main from "./components/Main";
import Products from "./components/Products";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/category/:type",
    element: (
      <Main>
        <Products />
      </Main>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
