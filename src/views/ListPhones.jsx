import axios from "axios";
import React, { useState, useEffect } from "react";
import PhoneListContainer from "../components/PhoneListContainer";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";


function ListPhone() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 const API_URI = process.env.REACT_APP_API_URI;


 useEffect(() => {
    axios
      .get(`${API_URI}/api/phones`)
      .then((response) => {
        setPhones(response.data);
         setIsLoading(false)
      })
      .catch(console.log);
  },);


  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}
      {phones.map((phone) => {
        return <PhoneListContainer phoneDetails={phone} key={phone.id} />;
      })}
      {phones.length === 0 && (
        <p className="error-message">
          Oops! Give us a second.
        </p>
      )}
    </>
  );
}
export default ListPhone;
