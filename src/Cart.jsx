import React, { useContext } from "react";
import { Context } from "./MainContext";

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(Context);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.length !== 0 ? (
              cart.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{item.price.toLocaleString('en-IN')}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right">
        <h3 className="text-lg font-semibold">
          Grand Total: ₹{totalPrice.toLocaleString('en-IN')}
        </h3>
        <button
          onClick={() => alert("Checkout functionality not implemented yet.")}
          className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;