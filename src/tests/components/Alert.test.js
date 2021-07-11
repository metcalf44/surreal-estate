import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

test("display an error message", () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("display a success message", () => {
  const { getByText } = render(<Alert message="Success!!" success />);

  expect(getByText(/Success/).textContent).toBe("Success!!");
});

test("if the message is not truthy it wont display", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

test("will display an error message", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);
  expect(getByText(/Error/).textContent).toBe("Error!");
  expect(asFragment()).toMatchSnapshot();
});

test("will display a success message", () => {
  const { getByText, asFragment } = render(<Alert message="Success!!" />);
  expect(getByText(/Success!!/).textContent).toBe("Success!!");
  expect(asFragment()).toMatchSnapshot();
});
