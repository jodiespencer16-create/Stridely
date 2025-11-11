import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(ShopContext);
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl mb-4 text-neutral-dark font-bold">Your cart is empty</h2>
        <Link to="/" className="text-accent underline">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-primary">Shopping Cart</h1>
      <ul className="space-y-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" loading="lazy" />
            <div className="flex-1 px-6">
              <h3 className="font-semibold text-neutral-dark">{item.title}</h3>
              <p className="text-accent font-bold">${item.price} × {item.quantity}</p>
            </div>
            <div>
              <Button variant="outline" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-between items-center">
        <Button variant="secondary" onClick={clearCart}>
          Clear Cart
        </Button>
        <p className="text-xl font-semibold">Total: <span className="text-accent">${totalPrice.toFixed(2)}</span></p>
      </div>
    </main>
  );
};

export default Cart;