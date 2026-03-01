import {render, screen} from '@testing-library/react';
import Button from '../Button';


test("render button", () => {
  render(<Button />)
  expect(screen.getByText("Hello123")).toBeInTheDocument()
})