import React from "react";
import {Link} from "react-router-dom";

import allPhonesImage from "./../assets/allPhonesImage.png";


function HomePage(){
return (
  <div>
    <h1 className="header">Zingaly Phone Challenge</h1>
    <div className="list-phones">
      <Link to="/phones">
        <img
          className="list-phones"
          src={allPhonesImage}
          alt="All phones list"
        />
        <div className="all-phones-container">
          <h1 className="all-phones">All Phones</h1>
          <p>Check out the full list of phones!</p>
        </div>
      </Link>
    </div>
  </div>
);}
export default HomePage
