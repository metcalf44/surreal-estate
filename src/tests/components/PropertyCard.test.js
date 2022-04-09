import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "country cottage",
    type: "cottage",
    bathrooms: "2",
    bedrooms: "3",
    price: "250000",
    city: "Hitchin",
    email: "emetcalf44@gmail.com",
  };
  const { asFragment } = render(<PropertyCard {...validProps} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("cottage - Hitchin")).toHaveClass("card-type");
    expect(getByText("2 bathrooms")).toHaveClass("card-bathroom");
    expect(getByText("3 bedrooms")).toHaveClass("card-bedroom");
    expect(getByText("£250000")).toHaveClass("card-price");
    expect(getByText("email")).toHaveClass("card-email");
  });
});
