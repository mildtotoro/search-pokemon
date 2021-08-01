import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App render with input search", () => {
  render(<App />);
  const searchElement = screen.getByText(/search/i);
  expect(searchElement).toBeInTheDocument();
});
