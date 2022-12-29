import { render, screen } from "@testing-library/react";
import App from './App';

test("Check Text", () => {
  render(<App />);
  const expectedText = screen.getByTestId('Hello_Text');
  expect(expectedText).toBeInTheDocument();
  expect(expectedText).toHaveTextContent('Hello, we are learning Web Development.');
});
