import React from "react";
import "./Cart.css";

function Cart9() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img src="images.png" alt="Genocidal" />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>Genocidal</h2>
          <p className="original-price">LKR1000.00</p>
          <p className="discounted-price">LKR940.00</p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Author:</strong> Mr XXX
          </p>
          <p>
            <strong>Category:</strong> Novel
          </p>
          <p>
            <strong>Sub Category:</strong> Literary criticism, poetry, fiction
          </p>
          <button className="add-to-cart">🛒 Add To Cart</button>
        </div>
        <div className="discount-badge">20%</div>
      </div>
    </div>
  );
}

export default Cart9;
