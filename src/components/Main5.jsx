import React from 'react';

const Main5 = () => {
  const cartItems = [
    {
      id: 1,
      title: 'Bathroom Cleaning',
      subtitle: '1 Bathroom',
      price: 499,
      image: '/image/star.webp', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Kitchen Deep Cleaning',
      subtitle: 'Full kitchen cleanup',
      price: 699,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          {/* <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Price Summary</h2>

            <div className="flex justify-between py-2 text-gray-700">
              <span>Item Total</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>Taxes & Fees</span>
              <span>₹0</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main5;
