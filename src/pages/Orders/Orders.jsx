import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        console.log(response)
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order => 
    order.user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Orders</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by user ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Products</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user.name}</td>
              <td>
                {order.products.map(product => (
                  <div key={product.product}>
                    {product.product.name} (x{product.quantity})
                  </div>
                ))}
              </td>
              <td>₹{order.total_amount}</td>
              <td>
                <span className={`badge bg-${'success'}`}>
                  {"completed"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
