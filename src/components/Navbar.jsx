import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <Link to="/">
        <span className="flex justify-center">
          <button>HOME</button>
        </span>
      </Link>
    </header>
  ); 
}

export default Navbar;
