import React from "react";
import "./ProductCard.css";
import { useApi } from "../../../../contexts/ApiContext";

export default function ProductCard({ product }) {
  const { delete_product } = useApi();

  const handle_delete = (id) => {
    delete_product(id);
  };

  return (
    <div className="card product-card">
      <img src={product.image.url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="card-text px-3 d-flex flex-column gap-2 mb-3">
          <div>
            <b>Price:</b> {product.price}
          </div>
          <div>
            <b>Where to use:</b> {product.wheretouse}
          </div>
          <div>
            <b>Stocks Remaining:</b> {product.stock}
          </div>
          <div>
            <b>Description:</b> {product.description}
          </div>
          <div>
            <b>Category:</b> {product.category}
          </div>
        </div>
        <a
          className="btn btn-outline-danger w-100"
          onClick={() => handle_delete(product._id)}
          style={{ fontWeight: "bold" }}
        >
          Delete Product
        </a>
      </div>
    </div>
  );
}
