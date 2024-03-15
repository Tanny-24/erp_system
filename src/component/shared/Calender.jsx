// Calendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import orderss from '../../Lib/ordermanage';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to filter orders for a specific date
  const filterOrdersByDate = (date) => {
    const selectedDateString = date.toDateString();
    const deliveryDate = new Date(date);
    deliveryDate.setDate(deliveryDate.getDate() + 7); // Calculate delivery date as 7 days from the selected date

    const deliveryOrders = orderss.filter(order => {
      const orderDate = new Date(order.orderDate).toDateString();
      return orderDate === selectedDateString || orderDate === deliveryDate.toDateString();
    });
    return deliveryOrders;
  };

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Render orders table
  const renderOrdersTable = (orders) => {
    if (orders.length === 0) {
      return <p>No orders for this date.</p>;
    }
    return (
      <div>
  <h3 className="text-xl font-bold mb-4">Orders:</h3>
  <div className="overflow-x-auto">
    <table className="w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2 text-left">Order ID</th>
          <th className="border border-gray-400 px-4 py-2 text-left">Customer Name</th>
          <th className="border border-gray-400 px-4 py-2 text-left">Status</th>

        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id} className="bg-white">
            <td className="border border-gray-400 px-4 py-2">{order.orderId}</td>
            <td className="border border-gray-400 px-4 py-2">{order.customerName}</td>
            <td className="border border-gray-400 px-4 py-2">{order.status}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Calendar View</h2>

      <div className="flex justify-center mb-8">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="rounded-lg border border-gray-300"
        />
      </div>

      {selectedDate && (
        <div>
          {renderOrdersTable(filterOrdersByDate(selectedDate))}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
