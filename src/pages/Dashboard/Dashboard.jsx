import React from "react";
import "./Dashboard.css";
import ProductCard from "./components/ProductCArd/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();




  return (
    <div className="dashboard-container">
      <div className="card w-75 p-3 sticky-top">
        <div className="card-body ">
          <h2>Hii Admin,</h2>
          <div className="card-content">
            <h5>Mobile number: 123456789</h5>
            <h5>
              Address: No.37, thiruvalluvar nagar main road, keelkatalai,
              chennai - 600117
            </h5>
            <h5>Product Count: 50</h5>
            <h5>Order Count: 500</h5>
            <button onClick={() => navigate('/orders')}>Orders</button>
          </div>
        </div>
      </div>

      <div className="products-container mt-4">
        <h2>Your Products</h2>
        <div className="row g-0 d-flex justify-content-center align-items-center">
          {new Array(20).fill(null).map((_, idx) => {
            return <div className="col-md-4 p-3" key={idx}>
              <ProductCard />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
