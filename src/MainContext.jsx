import React, { useEffect, useState, createContext } from 'react';

// Create the context
const Context = createContext();

export default function MainContext({ children }) {
  // Initialize cart with localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Initialize total price
  const [totalPrice, setTotalPrice] = useState(() => {
    try {
      const savedPrice = localStorage.getItem('totalPrice');
      return savedPrice ? JSON.parse(savedPrice) : 0;
    } catch (error) {
      console.error('Error loading total price from localStorage:', error);
      return 0;
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  // Recalculate total price whenever cart changes
  useEffect(() => {
    const newTotalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  // Save total price to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    } catch (error) {
      console.error('Error saving total price to localStorage:', error);
    }
  }, [totalPrice]);

  // Add a product to the cart
  const addToCart = (product_id, price,image,name,quantity) => {
    if (cart.some((item) => item.id === product_id)) {
      alert('Product is already in the cart!');
      return;
    }

    setCart((prevCart) => [...prevCart, { id: product_id, price,image,name,quantity }]);
  };

  // Remove a product from the cart
  const removeFromCart = (product_id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product_id));
  };

  return (
    <Context.Provider value={{ cart, totalPrice, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

// Named export
export { Context };