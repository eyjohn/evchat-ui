import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the footer", () => {
  const { getByText } = render(<App />);
  const evgeny = getByText(/Evgeny Yakimov/i);
  expect(evgeny).toBeInTheDocument();
});

test("fail", () => {
  expect(true).toEqual(false);
});