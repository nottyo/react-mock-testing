import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Parent from './Parent';

describe('Parent Integration Test', () => {
  it('emit click increased event from child component', () => {
    // when
    render(<Parent />);
    const increaseButton = screen.getByTestId('increase-click');
    userEvent.click(increaseButton);
    // then
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('1');
  });

  it('emit click decreased event from child component', () => {
    // when
    render(<Parent />);
    const increaseButton = screen.getByTestId('increase-click');
    userEvent.click(increaseButton);
    // then
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('1');
  });
});