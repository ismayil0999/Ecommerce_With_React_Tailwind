import React from 'react';

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      product: 'Product 1',
      price: 50.99,
      date: '2023-06-01',
      status: 'Complete',
    },
    {
      id: 2,
      product: 'Product 2',
      price: 30.99,
      date: '2023-06-02',
      status: 'In Cargo',
    },
    {
        id: 3,
        product: 'Product 3',
        price: 30.99,
        date: '2023-06-02',
        status: 'Complete',
      },
      {
        id: 4,
        product: 'Product 4',
        price: 30.99,
        date: '2023-06-02',
        status: 'In Cargo',
      },

  ];

  return (
    <div className="mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold">{order.product}</p>
            <p className="text-gray-600 font-bold">${order.price}</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Date: {order.date}</p>
          <p className="text-sm">
            Status: <span className={order.status==="Complete" ? "text-green-600 font-semibold" :"text-red-600 font-semibold"}>{order.status}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;