import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css'
import { useApi } from '../../contexts/ApiContext';
import { IoMdRefresh } from 'react-icons/io';

export default function Orders() {
  const [search, setSearch] = useState('');
  const {orders, fetchOrders, loading} = useApi();

  useEffect(() => {
    
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order => 
    order.user.name.toLowerCase().includes(search.toLowerCase())
  );

  const refresh_orders = () => {
    fetchOrders();
  }

  return (
    <div className="container mt-4">
      <div className="d-flex mb-3 align-items-center"><h2 className="mb-0">Orders</h2>
      <button onClick={refresh_orders} className='ms-auto refresh-button'><IoMdRefresh /></button></div>
      
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
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order._id}</td>
              <td>{order.user.name}</td>
              <td>
                {order.products.map(product => (
                  <div key={product._id}>
                    {product.product.name} (x{product.quantity})
                  </div>
                ))}
              </td>
              <td>₹{order.total_amount}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
