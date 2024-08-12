import React, { useState, useEffect } from "react";
import { getProducts } from '../../Utils/API/'
import Axios  from "axios";

const ProductsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const handleSearch = () => {
  }
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      console.log(res)
    });
  });
  return (
    <div>
      <input type="text" onChange={(e) => {
        searchValue(e.target.value);
      }} value={searchValue}/>
    </div>
  );
};

export default ProductsList;
