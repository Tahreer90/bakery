import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
