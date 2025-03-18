import React from "react";
import "./BookCategory.css";
import { Link } from "react-router-dom";

const BookCard = ({ image, title, discount, path }) => {
  return (
    <Link
      to={{
        pathname: path,
        state: { image, title, discount },
      }}
      className="book-card"
    >
      <div className="book-card-content">
        <img src={image} alt={title} />
        {discount && <span className="discount">{discount}%</span>}
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default BookCard;
