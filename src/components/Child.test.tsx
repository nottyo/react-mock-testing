import { fireEvent, render, screen } from '@testing-library/react';
import Child, { ChildProps } from './Child';
describe('Child', () => {
  const props: ChildProps = {
    name: 'React Testing Library',
    onDecreaseClick: jest.fn(),
    onIncreaseClick: jest.fn(),
  };
  it('should render title', () => {
    // when
    render(<Child {...props} />);
    // then
    expect(screen.getByTestId('child-title')).toHaveTextContent(`This is child component name: ${props.name}`);
    expect(screen.getByTestId('increase-click')).toHaveTextContent('+');
    expect(screen.getByTestId('decrease-click')).toHaveTextContent('-');
  });

  it('should emit increase click callback', () => {
    // when
    render(<Child {...props} />);
    fireEvent.click(screen.getByTestId('increase-click'));
    // then
    expect(props.onIncreaseClick).toHaveBeenCalled();
  });

  it('should emit decrease click callback', () => {
    // when
    render(<Child {...props} />);
    fireEvent.click(screen.getByTestId('decrease-click'));
    // then
    expect(props.onDecreaseClick).toHaveBeenCalled();
  });
});