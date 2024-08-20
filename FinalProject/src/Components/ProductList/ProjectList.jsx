// import React from "react";
// import { getProducts } from "../../Utils/api";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const ProjectList = () => {
    
//   const [products, setProducts] = useState([]);
// "react-router-dom";

// const ProductList = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const navigateToNewPage = (id) => {
//     navigate(`/product-detail/${id}`);
//   useEffect(() => {
//     getProducts().then((res) => {
//       setProducts(res.data);
//       console.log(res.data)
//     });
//   }, []);}}
//   return (
//     <>
//       {products.map((item) => (
//         <div key={item.id} className="products">
//             <img src={item.image} alt="" />
//         </div>

//       ))}
//     </>
//   );
// };

// export default ProjectList;



import { getProducts } from "../../Utils/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductList.css"


const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const navigateToNewPage = (id) => {
    navigate(`/product-detail/${id}`);
  };
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="products-container">
        {products.map((item) => (
          <div
            onClick={() => navigateToNewPage(item.id)}
            className="products"
            key={item.id}
          >
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;