import React from 'react'
import MainCart from "../../userDashboard/components/MainCart"
import Product from "../../userDashboard/components/Product"
import Product2 from "../../userDashboard/components/Product2";

const page = () => {
  return (
    <div>
      <MainCart />
      <Product />
      <Product2 />
    </div>
  )
}

export default page