import React from "react";
import { Link } from "react-router-dom";

function PhoneListContainer({ phoneDetails }) {
  const {name, description, price, color, img} = phoneDetails;

  return (
    <Link to={`/phones/${phoneDetails.id}`}>
      <div className="phone">
        <div className="phone-card">
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <p className="color">{color}</p>
          <p>
            <strong>price:</strong> {price}
          </p>
          <img
            className="block w-1/4 object-contain p-5"
            src={img}
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
}

export default PhoneListContainer;
