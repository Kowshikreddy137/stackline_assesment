import React from "react";
import "../assets/sidebar.css";

const Sidebar = ({ product }) => {
  return (
    <div className="sidebar">
      <img src={product.image} alt={product.title} className="sidebar-logo" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-subtitle">{product.subtitle}</p>
      <div className="product-tags">
        {product.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
