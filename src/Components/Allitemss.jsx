import React, { useContext, useState } from 'react';
import { data } from '../data/data';
import { Context } from '../MainContext';

const Allitems = () => {
  const [foods, setFoods] = useState(data);
  const { cart, addToCart, removeFromCart } = useContext(Context);

  const CartBtnHandler = (p_id, price, image, name, quantity, flag) => {
    if (flag === 1) {
      removeFromCart(p_id, price);
    } else {
      addToCart(p_id, price, image, name, quantity);
    }
  };

  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <h1 className="text-orange-600 font-bold text-3xl md:text-4xl text-center mb-6">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-auto">
          <p className="font-bold text-gray-700 mb-2">Filter Type</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              All
            </button>
            <button
              onClick={() => filterType('Burger')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('Pizza')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('Salad')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Salads
            </button>
            <button
              onClick={() => filterType('Paratha')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Paratha
            </button>
            <button
              onClick={() => filterType('Cold Coffee')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Cold Coffee
            </button>
            <button
              onClick={() => filterType('Drink')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Drink
            </button>
            <button
              onClick={() => filterType('Pasta')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition duration-300"
            >
              Pasta
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between items-center p-4">
              <p className="font-bold">{item.name}</p>
              <button
                onClick={() =>
                  CartBtnHandler(
                    item.id,
                    item.price,
                    item.image,
                    item.name,
                    item.quantity,
                    cart.some((cartItem) => cartItem.id === item.id) ? 1 : 0
                  )
                }
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
              >
                {cart.some((cartItem) => cartItem.id === item.id)
                  ? 'Remove From Cart'
                  : 'Add To Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allitems;