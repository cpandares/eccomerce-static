
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import '../../styles/ProductList.scss';
import useGetProductsByCategory from "../../hooks/useGetProductsByCategory";
import { useParams } from "react-router-dom";


const API = ``


const ProductsCategories = () => {

    const { id } = useParams();

   const products = useGetProductsByCategory(id);
  
  return (
    <section className="main-container">
      <div className="cards-container">
        {
          products.map((product, index) => {
            return (
              <ProductItem key={index} product={product} />
            )
          })
        }
      
      </div>
    </section>
  );
};

export default ProductsCategories;
