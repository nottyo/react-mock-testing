import { render, screen } from '@testing-library/react';
import { ChildProps } from './Child';
import MockComponent, { mockComponentPropsSpy } from './Mock';
import Parent from './Parent';

jest.mock('./Child', () => (props: ChildProps) => MockComponent<ChildProps>(props));

describe('Parent', () => {
  it('render parent title text', () => {
    // when
    render(<Parent />);
    // then
    expect(screen.getByTestId('parent-title')).toHaveTextContent('This is Parent');
  });

  it('can spy child component props with mock', () => {
    // given
    const expectChildProps: ChildProps = {
      name: 'Child Component',
      onDecreaseClick: expect.any(Function),
      onIncreaseClick: expect.any(Function),
    };
    // when
    render(<Parent />);
    // // then
    expect(mockComponentPropsSpy).toHaveBeenCalled();
    expect(mockComponentPropsSpy).toHaveBeenCalledWith(expectChildProps);
  });
});