import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhoneDetailComponent from "../components/PhoneDetailComponent"
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

function SinglePhone() {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: phoneId } = useParams();

 const API_URI = process.env.REACT_APP_API_URI;

 
 useEffect(() => {
   axios
     .get(`${API_URI}/api/phones/id`)
     .then((response) => {
       setPhones(response.data);
       setIsLoading(false);
     })
     .catch(console.log);
 });

  return (
    <div>
      <Navbar />
      <div className="my-4">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-800">
          Phone Details
        </h1>
        {isLoading && <Spinner />}
        {!isLoading && <PhoneDetailComponent phoneDetails={phone} />}
      </div>
    </div>
  );
}

export default SinglePhone;
