'use client';
import React, { useEffect, useState } from 'react';
import { FaBell, FaRupeeSign, FaShoppingBag } from 'react-icons/fa';

const History = () => {
  const [tab, setTab] = useState('transactions');
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const fetchHistory = async () => {
      const token = localStorage.getItem("auth-token");
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/user/${user._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        const data = await res.json();
        setTransactions(data.bookings?.flat() || []);
      } catch (error) {
        console.log(error)
        console.error("Failed to fetch history:", error);
      }

      // Dummy orders and notifications for now
      setOrders([
        { id: 1, name: "Oxygen Cylinder", status: "Delivered", date: "2025-04-10" },
        { id: 2, name: "Wheelchair Rental", status: "Pending", date: "2025-04-12" }
      ]);
      setNotifications([
        { id: 1, message: "Your nurse booking for 15 April is confirmed!" },
        { id: 2, message: "A new caretaker has joined near your area." }
      ]);
    };

    fetchHistory();
  }, []);

  const TabButton = ({ label, icon, active }) => (
    <button
      onClick={() => setTab(label)}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm md:text-base 
        ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition`}
    >
      {icon} {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">History & Activity</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        <TabButton label="transactions" icon={<FaRupeeSign />} active={tab === 'transactions'} />
        <TabButton label="orders" icon={<FaShoppingBag />} active={tab === 'orders'} />
        <TabButton label="notifications" icon={<FaBell />} active={tab === 'notifications'} />
      </div>

      {/* Content Sections */}
      {tab === 'transactions' && (
        <div className="space-y-4  ">
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions found.</p>
          ) : (
            transactions.map((t, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm bg-white">
                <p><strong>Service:</strong> {t.serviceName}</p>
                <p><strong>Price:</strong> ₹{t.price}</p>
                <p><strong>Scheduled:</strong> {new Date(t.scheduleDateTime).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'orders' && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <p><strong>Item:</strong> {order.name}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Date:</strong> {order.date}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'notifications' && (
        <div className="space-y-4">
          {notifications.map((note) => (
            <div key={note.id} className="p-4 border rounded-lg shadow-sm bg-yellow-100 text-yellow-800">
              {note.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
