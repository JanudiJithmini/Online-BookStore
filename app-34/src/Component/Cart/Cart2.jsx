import React from "react";
import "./Cart.css";

function Cart2() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img src="The Kite Runner.png" alt="1984 by George Orwell" />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>The Kite Runner</h2>
          <p className="original-price">LKR700.00</p>
          <p className="discounted-price">LKR540.00</p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Author:</strong> Khaled Hosseini
          </p>
          <p>
            <strong>Category:</strong> Fiction
          </p>
          <p>
            <strong>Sub Category:</strong> Literary criticism, poetry, fiction
          </p>
          <button className="add-to-cart">🛒 Add To Cart</button>
        </div>
        <div className="discount-badge">10%</div>
      </div>
    </div>
  );
}

export default Cart2;
