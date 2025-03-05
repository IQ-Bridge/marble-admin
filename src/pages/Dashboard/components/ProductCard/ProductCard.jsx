import React from "react";
import Carousel from "../Carousel/Carousel";
import './ProductCard.css'

export default function ProductCard({product}) {
  return (
    <div className="card product-card">
      <img src={product.image.url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="card-text">
          <ul>
            <li>{product.price}</li>
            <li>{product.wheretouse}</li>
            <li>{product.stock}</li>
            <li>{product.description}</li>
          </ul>
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
