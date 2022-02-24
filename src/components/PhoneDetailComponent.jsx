import React from "react";
import { Link } from "react-router-dom";

function SinglePhoneDetails(props) {
  const { phoneDetails } = props;

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md shadow shadow-lg my-4">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-2/5"
          src={phoneDetails[0].img}
          alt={phoneDetails[0].name}
        />

        <div className="py-5 flex flex-col items-center justify-center space-y-1.5 w-3/5">
          <h1 className="text-lg text-black font-bold">
            {phoneDetails[0].name}
          </h1>
          <strong>Description:</strong>
          <p>{phoneDetails[0].description}</p>
          <strong>color</strong>
          <p>{phoneDetails[0].color}</p>
          <strong>price</strong>
          <p>{phoneDetails[0].price}</p>
        </div>
      </div>
      <Link to="/phones">
        <p className="text-base font-medium text-gray-500 animate-pulse ">
          Go back to the list
        </p>
      </Link>
    </div>
  );
}

export default SinglePhoneDetails;


