import React from "react";
import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Header />
      {routing}
      <Footer />
    </>
  );
}

export default App;
