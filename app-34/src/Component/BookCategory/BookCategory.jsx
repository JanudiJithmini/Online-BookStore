import React from "react";
import "./BookCategory.css";
function BookCategory() {
  return (
    <div className="Category-page">
      <div className="category-dropdown">
        <label>Categories: </label>
        <select>
          <option value="fiction">Fiction</option>
          <option value="childrens-story">Children's Story</option>
          <option value="novels">Novels</option>
        </select>
      </div>
    </div>
  );
}

export default BookCategory;
