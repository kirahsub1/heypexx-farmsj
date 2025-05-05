import React from 'react'
import DashboardPage from './components/DashboardPage';
import Productlist from './components/Productlist';

const page = () => {
  return (
    <div>
      <DashboardPage />
      <Productlist />
    </div>
  );
}

export default page