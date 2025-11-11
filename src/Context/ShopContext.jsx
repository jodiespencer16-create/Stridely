import React, { createContext, useState, useEffect } from "react";
import { productsData } from "../data/productsData";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  
  const searchProducts = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      ));
    }
  };
  
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + parseFloat(item.price) * item.amount, 0));
  }, [cart]);
  
  useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.amount, 0));
  }, [cart]);
  
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };
  
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const increaseAmount = (id) => addToCart(cart.find((item) => item.id === id), id);
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem && cartItem.amount > 1) {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      ));
    } else {
      removeFromCart(id);
    }
  };
  
  return (
    <ShopContext.Provider
      value={{
        filteredProducts,
        products,
        searchProducts,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        quantity,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;