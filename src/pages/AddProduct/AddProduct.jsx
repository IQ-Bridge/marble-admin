import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css"; // Import CSS file

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    wheretouse: "",
    category: "granite",
    description: "",
    stock: 0,
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("wheretouse", product.wheretouse);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("stock", product.stock);
    images.forEach((image) => formData.append("images", image));

    try {
      await axios.post("http://localhost:3000/add-product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      setProduct({
        name: "",
        price: "",
        wheretouse: "",
        category: "granite",
        description: "",
        stock: 0,
      });
      setImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="container add-product-container">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter product name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Where to Use</label>
            <input
              type="text"
              name="wheretouse"
              className="form-control"
              placeholder="Usage details"
              value={product.wheretouse}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-select"
              value={product.category}
              onChange={handleChange}
            >
              <option value="granite">Granite</option>
              <option value="marble">Marble</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              name="stock"
              className="form-control"
              placeholder="Enter stock quantity"
              value={product.stock}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
