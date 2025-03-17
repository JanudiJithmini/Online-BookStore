import React from "react";
import "./BookCategory.css";
const BookCard = ({ image, title, discount }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      {discount && <span className="discount">{discount}%</span>}
      <p>{title}</p>
    </div>
  );
};

export default BookCard;
