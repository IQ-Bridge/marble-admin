import React, { useState } from "react";
import { validateForm } from "../../utils/FormUtility";
import { handleInputChange } from "../../utils/InputStateFunctions";
import "./Login.css";
import { useApi } from "../../contexts/ApiContext";

export default function Login() {
  const {login, loading} = useApi();

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
    const { checked } = validateForm(formData, rules);

    if (!checked) {
      return toast.error('Something Went Wrong. Please try again later.');
    }

    try {
      console.log(formData);
      await login(formData);
    } catch (e) {
      console.log('Error on login: ', e)
    } 
  };

  return (
    <div className="container login-container">
      <div className="card form-card p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>


        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              autoComplete="off"
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
