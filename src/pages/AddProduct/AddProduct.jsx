import React, { useState } from "react";
import { useApi } from "../../contexts/ApiContext"; // API Context
import { validateForm } from "../../utils/FormUtility"; // Validation
import { toast } from "react-toastify";
import {
  handleInputChange,
  handleFileInput,
  handleDropdownChange,
} from "../../utils/InputStateFunctions"; // Import utility functions

export default function AddProduct() {
  const { add_product, loading } = useApi(); // API function & state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    wheretouse: "",
    category: "granite",
    description: "",
    stock: ""
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rules = {
      name: { required: true, minLength: 3 },
      price: { required: true, isNumber: true },
      wheretouse: { required: true },
      category: { required: true },
      description: { required: true, minLength: 10 },
      stock: { required: true, isNumber: true }
    };

    const { checked } = validateForm(product, rules);
    if (!checked) return;


    try {
      await add_product(product, image); 
      
      setImage(null);
    } catch (error) {
      console.log(error)
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="container add-product-container">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter product name"
              value={product.name}
              onChange={(e) => handleInputChange(e, setProduct)}
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              id="price"
              className="form-control"
              placeholder="Enter price"
              value={product.price}
              onChange={(e) => handleInputChange(e, setProduct)}
              required
            />
          </div>

          {/* Where to Use */}
          <div className="mb-3">
            <label className="form-label">Where to Use</label>
            <input
              type="text"
              id="wheretouse"
              className="form-control"
              placeholder="Usage details"
              value={product.wheretouse}
              onChange={(e) => handleInputChange(e, setProduct)}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              id="category"
              className="form-select"
              value={product.category}
              onChange={(e) => handleInputChange(e, setProduct)}
            >
              <option value="granite">Granite</option>
              <option value="marble">Marble</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              id="description"
              className="form-control"
              placeholder="Enter description"
              value={product.description}
              onChange={(e) => handleInputChange(e, setProduct)}
              required
            />
          </div>

          {/* Upload Image */}
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          {/* Stock */}
          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              id="stock"
              className="form-control"
              placeholder="Enter stock quantity"
              value={product.stock}
              onChange={(e) => handleInputChange(e, setProduct)}
              required
            />
          </div>

         

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? (
             "Adding the product to the db"
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
