// Orders.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import orderss from '../../Lib/ordermanage';

const Orders = () => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);

  const handleDeleteOrder = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) {
      const filteredOrders = orderss.filter(order => order.id !== id);
    }
  };

  const toggleOrderDetails = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  const handleSearch = () => {
    if (searchTerm && !orderss.some(order => order.customerName.toLowerCase().includes(searchTerm.toLowerCase()))) {
      setShowNotFoundMessage(true);
    } else {
      setShowNotFoundMessage(false);
    }
  };

  const filteredOrders = orderss.filter(order => {
    // Filter by search term
    const isNameMatched = order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return isNameMatched;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Orders Management</h2>

      <div className="flex items-center mb-4">
        {/* Search bar */}
        <input
          type="text"
          className="border border-gray-300 px-3 py-1 rounded mr-2"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Search button */}
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded" onClick={handleSearch}>Search</button>
      </div>

      {showNotFoundMessage && <p className="text-red-500 mb-4">No orders found for the specified customer name.</p>}

      {/* Display filtered orders with scrolling */}
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-800 font-semibold">Order ID: {order.orderId}</p>
              <p className="text-gray-600">Customer Name: {order.customerName}</p>
              <p className="text-gray-600">Order Date: {order.orderDate}</p>
              <p className="text-gray-600">Status: {order.status}</p>
              {expandedOrderId === order.id && (
                <div>
                  <p className="text-gray-600">Address: {order.address}</p>
                  <p className="text-gray-600">Phone Number: {order.phoneNumber}</p>
                </div>
              )}
              <div className="flex justify-end mt-4">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded mr-2" onClick={() => toggleOrderDetails(order.id)}>Toggle Details</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/" className="block mt-8 underline">Go to Dashboard</Link>
    </div>
  );
};

export default Orders;
