import React from "react";
import Carousel from "../Carousel/Carousel";

export default function ProductCard({product}) {
  return (
    <div className="card">
      <Carousel images={product.images}/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          <ul>
            <li>{product.price}</li>
            <li>{product.wheretouse}</li>
            <li>{product.stock}</li>
            <li>{product.description}</li>

          </ul>
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
