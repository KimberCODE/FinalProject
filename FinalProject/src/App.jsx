import React from "react";

import { Routes, Route } from "react-router-dom";
import ProjectList from "./Components/ProductList/ProjectList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/"element={<ProjectList/>}/>
        <Route path="/product-detail/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
