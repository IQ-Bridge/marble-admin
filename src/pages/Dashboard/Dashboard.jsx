import React, { useEffect } from "react";
import "./Dashboard.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useApi } from "../../contexts/ApiContext";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const { fetch_products, products } = useApi();
  const { currentUser, logout } = useAuth();


  const handleLogout = async() => {
    try{
      await logout();
      toast.success('Successfully logged out')
      navigate('/login')
    }catch(e){
      toast.error('Something went wrong')
    }
  }

  useEffect(() => {
    fetch_products();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <div className="card user-card sticky-top w-75 shadow p-4">
        <div className="card-body">
          <h2 className="mb-3">Hello, {currentUser?.name || "User"} 👋</h2>
          <div className="card-content">
            <p><strong>Mobile:</strong> 123456789</p>
            <p>
              <strong>Address:</strong> No.37, Thiruvalluvar Nagar Main Road, Keelkatalai,
              Chennai - 600117
            </p>
            <p><strong>Product Count:</strong> {products.length}</p>
            <p><strong>Order Count:</strong> {products.length * 5}</p>
          </div>
          <div className="btn-group mt-3">
            <button className="btn btn-primary me-2" onClick={() => navigate("/orders")}>View Orders</button>
            <button className="btn btn-success" onClick={() => navigate("/add-products")}>Add Products</button>
            <button className="btn btn-danger ms-2" onClick={() => handleLogout()}>Logout</button>
          </div>
        </div>
      </div>
    <div className="dashboard-container container">
      {/* User Info Card */}
      

      {/* Products Section */}
      <div className="products-container mt-5">
        <h2 className="text-center mb-4">Your Products</h2>
        {products.length === 0 ? (
          <p className="text-center text-muted">No products available. Add some products.</p>
        ) : (
          <div className="row g-4">
            {products.map((product, idx) => (
              <div className="col-md-4" key={idx}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div></div>
  );
}
