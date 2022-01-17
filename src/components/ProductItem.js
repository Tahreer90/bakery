import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <img className="img" src={product.img} alt="" />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductItem;
