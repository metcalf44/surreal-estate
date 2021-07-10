import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    console.log(fields);
    event.preventDefault();
    return axios
      .post(`http://localhost:3000/api/v1/PropertyListing`, fields)
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
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

        <div className="form-city">
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Hitchin">Hitchin</option>
            </select>
          </label>
        </div>

        <div className="btn-container">
          <button type="submit">Add property</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
