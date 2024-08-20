// import React, {useState, useEffect} from 'react'
// import {useParams, useNavigate} from 'react-router-dom'
// import { getDetails } from '../../Utils/api'

// const ProductDetails = () => {
//     const [product, setProduct] = useState(null)
//     const {id} = useParams()
//     const navigate = useNavigate()
//     useEffect(() => {
//         const fetchProductDetails = async () => {
//           try {
//             const response = await axios.get(
//               `https://fakestoreapi.com/products/${id}`
//             );
//             setProduct(response.data);
//           } catch (error) {
//             console.error("Error fetching product details:", error);
//           }
//         };

//         fetchProductDetails();
//       }, [id]);

//       if (!product) return <div>Loading...</div>;
//   return (
//     <>
//     <button onClick={() => navigate(-1)}>Go Back</button>
//     <div className="product">
//       <h1>{product.title}</h1>
//       <div className="product-container">
//         <img src={product.image} alt={product.title} />
//         <p>{product.description}</p>
//       </div>
//       <h3>Price: ${product.price}</h3>
//     </div>
//     <button>Add to cart</button>
//   </>
//   )
// }

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);
  if (!product) return <div>Loading...</div>;
  return (
    <>
      <div className="container">
        <div className="button-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <button>Add to cart</button>
        </div>
        <div className="product">
          <h1>{product.title}</h1>
          <div className="product-container">
            <div className="img-container">
            <img src={product.image} alt={product.title} />
            </div>
            <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
