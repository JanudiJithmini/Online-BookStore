import React from "react";
import "./NavBar.css";
import MenuList from "../MenuLsit/MenuList";

function NavBar() {
  return (
    <div className="nav-bar">
      <h1>
        Online <span>Bookstore</span>
      </h1>
      <img src="bookstore-removebg.png" alt="" />
      <MenuList linkName="Home" url="/" />
      <MenuList linkName="Category" url="/categories" />
      <MenuList linkName="Contact" url="/contact" />
      {/* <MenuList linkName="Cart" url="/cart" /> */}
      <MenuList linkName="Login" url="/login" />
      <div className="search-bar">
        <input type="text" placeholder="Search for books..." />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default NavBar;
