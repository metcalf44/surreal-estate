import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Stevenage",
      type: "Detached",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    return axios
      .post(`http://localhost:3000/api/v1/PropertyListing`, fields)
      .then(() =>
        setAlert({
          message: "Property added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="Add-property">
      <div className="container">
        <form onSubmit={handleAddProperty}>
          <Alert message={alert.message} success={alert.isSuccess} />

          <label htmlFor="title">
            Title:
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>

          <div className="form-property">
            <label htmlFor="type">
              Property type:
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Flat">Flat</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>

          <div className="form-bedrooms">
            <label htmlFor="bedrooms">
              Bedrooms:
              <input
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="form-bathroom">
            <label htmlFor="bathroom">
              Bathrooms:
              <input
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="form-price">
            <label htmlFor="price">
              Price <span className="pound-sign">(£)</span>
              <input
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="form-city">
            <label htmlFor="city">
              City:
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Stevenage">Stevenage</option>
                <option value="Letchworth">Letchworth</option>
                <option value="Baldock">Baldock</option>
                <option value="Hitchin">Hitchin</option>
              </select>
            </label>
          </div>
          <div className="form-email">
            <label htmlFor="email">
              E-mail:
              <input
                id="email"
                name="email"
                value={fields.email}
                placeholder="Example@email.com"
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="btn-container">
            <button type="submit">Add property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
