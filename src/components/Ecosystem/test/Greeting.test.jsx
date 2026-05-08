import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "../components/Greeting.jsx";

test.skip("Should display the name given via props", () => {
  render(<Greeting name="Deni" />);

  const textElement = screen.getByText(/hello, Deni/i);

  expect(textElement).toBeInTheDocument();
});
