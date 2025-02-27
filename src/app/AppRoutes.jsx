import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ApiProvider } from "../contexts/ApiContext.jsx";
import { AuthProvider } from "../contexts/AuthContext.jsx";
import Login from "../pages/Login/Login.jsx";
export default function AppRoutes() {
  return (
    <AuthProvider>
        <ApiProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />            
            {/* Fallback for Undefined Routes */}
            <Route path="*" element={<Login />} />
          </Routes>
        </ApiProvider>
    </AuthProvider>
  );
}
