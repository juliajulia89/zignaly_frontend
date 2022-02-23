import axios from "axios";
import React, { useState, useEffect } from "react";
import PhoneDetailComponent from "../components/PhoneDetailComponent";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

function ListPhone() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhones = async () => {
      try {
          const getPhones = await axios.get("/api")
      } catch (error) {
        console.log(
          error,
          "We apologize, server error, please try again later"
        );
      }
    };
    getPhones();
  });

  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}
      {phones.map((phone) => {
        return <PhoneDetailComponent phoneDetails={phone} key={phone._id} />;
      })}
      {phones.length === 0 && (
        <p className="error-message">
          Oops we run out this one! Don't worry, there are plenty more.
        </p>
      )}
    </>
  );
}
export default ListPhone;
