// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole('button', { name: '+' });

  expect(incrementButton).toBeEnabled();
  fireEvent.click(incrementButton);

  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByRole('button', { name: '-' });

  expect(decrementButton).toBeEnabled();
  fireEvent.click(decrementButton);

  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('-1');
});
