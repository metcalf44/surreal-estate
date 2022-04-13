import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";
import "../styles/Properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: true,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState(initialState.alert);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: true,
        })
      );
  }, [search]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "something went wrong please try again",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div className="properties">
      <SideBar />
      <div className="properties-container">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </div>
  );
};

export default Properties;
