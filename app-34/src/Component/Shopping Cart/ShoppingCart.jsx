import React, { useState } from "react";
import "./ShoppingCart.css";
import book4 from "../../assets/1987.png";
import book5 from "../../assets/99082.jpg";
import book6 from "../../assets/Fairy-Tale-Series_Little-Red-Riding-Hood-FC-1-1.jpg";

const booksInCart = [
  { id: 1, image: book4, title: "The Great Gatsby", price: 15.99, quantity: 1 },
  {
    id: 2,
    image: book5,
    title: "Pride and Prejudice",
    price: 12.99,
    quantity: 1,
  },
  {
    id: 3,
    image: book6,
    title: "To Kill a Mockingbird",
    price: 14.99,
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState(booksInCart);
  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map((book) =>
        book.id === id
          ? { ...book, quantity: Math.max(1, book.quantity + delta) }
          : book
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, book) => acc + book.price * book.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.map((book) => (
        <div key={book.id} className="cart-item">
          <img src={book.image} alt={book.title} />
          <span>{book.title}</span>
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange(book.id, -1)}>-</button>
            <span>{book.quantity}</span>
            <button onClick={() => handleQuantityChange(book.id, 1)}>+</button>
          </div>
          <span>${(book.price * book.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="cart-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Sales Tax: ${tax.toFixed(2)}</p>
        <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
      </div>
      <p className="free-shipping">
        Congrats, you're eligible for Free Shipping
      </p>
    </div>
  );
}
