import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/Sidebar.css";

const SideBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="sidebar-input"
        />
        <button type="submit">Search</button>
      </form>
      <p className="sidebar-filter">Filter by city</p>
      <Link
        to={buildQueryString("query", { city: "Stevenage" })}
        className="sidebar-item"
      >
        Stevenage
      </Link>

      <Link
        to={buildQueryString("query", { city: "Letchworth" })}
        className="sidebar-item"
      >
        Letchworth
      </Link>
      <Link
        to={buildQueryString("query", { city: "Baldock" })}
        className="sidebar-item"
      >
        Baldock
      </Link>
      <Link
        to={buildQueryString("query", { city: "Hitchin" })}
        className="sidebar-item"
      >
        Hitchin
      </Link>
      <p className="sidebar-sort">Sort by price</p>
      <Link
        to={buildQueryString("sort", { price: 1 })}
        className="sidebar-item sidebar-price"
      >
        Price Ascending
      </Link>
      <Link
        to={buildQueryString("sort", { price: -1 })}
        className="sidebar-item sidebar-price"
      >
        Price Descending
      </Link>
    </div>
  );
};

export default SideBar;
