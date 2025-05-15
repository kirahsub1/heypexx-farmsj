import React from 'react'
import ProductPage from './components/Product'
import ProductDisplay from "./components/productlist/ProductDisplay"
import Rating from "./components/Rating"

const page = () => {
  return (
    <div>
      <ProductPage />
      <ProductDisplay />
      <Rating />
    </div>
  )
}

export default page
