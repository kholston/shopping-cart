import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
