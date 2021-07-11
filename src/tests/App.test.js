import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
