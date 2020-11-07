import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

Element.prototype.scrollIntoView = jest.fn();

test("renders the footer", () => {
  const { getByText } = render(<App />);
  const evgeny = getByText(/Evgeny Yakimov/i);
  expect(evgeny).toBeInTheDocument();
});
