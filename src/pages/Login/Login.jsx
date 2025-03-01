import React, { useState } from "react";
import { validateForm } from "../../utils/FormUtility";
import { handleInputChange } from "../../utils/InputStateFunctions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginFirebase } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const rules = {
    email: { required: true },
    password: { required: true },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { checked } = validateForm(formData, rules);

    if (!checked) {
      setError("❌ Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    try {
      console.log(formData);
      await loginFirebase(formData.email, formData.password);
      navigate("/dashboard");
    } catch (e) {
      setError("❌ Invalid email or password.");
      console.error("Login Error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container login-container">
      <div className="card form-card p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, setFormData)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange(e, setFormData)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
