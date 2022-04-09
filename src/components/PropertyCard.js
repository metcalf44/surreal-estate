import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}) => {
  return (
    <div className="Property-card">
      <h2 className="card-heading" data-testid="card-heading">
        Surreal Estate
      </h2>
      <ul className="card-list">
        <li className="card-title">{title}</li>
        <li className="card-type">
          {type} - {city}
        </li>
        <li className="card-bedroom">{bedrooms} - bedrooms</li>
        <li className="card-bathroom">{bathrooms} - bathrooms </li>
        <li className="card-price">£{price}</li>
        <li className="card-email">
          <a href={`mailto:${email}`} className="card-mailto">
            Email seller
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
