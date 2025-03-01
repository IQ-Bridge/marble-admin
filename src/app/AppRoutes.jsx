import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ApiProvider } from "../contexts/ApiContext.jsx";
import { AuthProvider } from "../contexts/AuthContext.jsx";
import Login from "../pages/Login/Login.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Orders from "../pages/Orders/Orders.jsx";
import AddProduct from "../pages/AddProduct/AddProduct.jsx";
export default function AppRoutes() {
  return (
    <AuthProvider>
        <ApiProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-products" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />            
            {/* Fallback for Undefined Routes */}
            <Route path="*" element={<Login />} />
          </Routes>
        </ApiProvider>
    </AuthProvider>
  );
}
