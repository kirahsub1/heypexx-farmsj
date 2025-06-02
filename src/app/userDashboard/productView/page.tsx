import React from "react";
import ProductPage from "../components/ProductViewpage";
import ProductDisplay from "../components/ProductDisplay";
import Rating from "../components/Rating";

const page = () => {
  return (
    <div>
      <ProductPage />
      <ProductDisplay />
      <Rating />
    </div>
  );
};

export default page;
