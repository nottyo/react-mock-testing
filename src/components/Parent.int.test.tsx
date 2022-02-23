import { fireEvent, render, screen } from '@testing-library/react';
import Parent from './Parent';

describe('Parent Integration Test', () => {
  it('emit click event from child component', () => {
    // when
    render(<Parent />);
    const increaseButton = screen.getByTestId('increase-click');
    fireEvent.click(increaseButton);
    // then
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('1');
  });
});