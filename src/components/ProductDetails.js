import React from 'react';
import Sidebar from './Sidebar';
import Graph from './Graph';
import Table from './Table';
import '../assets/ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <Sidebar product={product} />
      <div className="content">
        <Graph sales={product.sales} />
        <Table sales={product.sales} />
      </div>
    </div>
  );
};

export default ProductDetails;
