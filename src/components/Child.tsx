import React from 'react';

export type ChildProps = {
  name: string;
  onIncreaseClick: () => void,
  onDecreaseClick: () => void,
} 

const Child = (props: ChildProps) => {
  const handleIncreaseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onIncreaseClick();
  };

  const handleDecreaseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onDecreaseClick();
  };
  return (
    <div>
      <h2 data-testid="child-title">This is child component name: {props.name}</h2>
      <button onClick={handleIncreaseClick} data-testid="increase-click">+</button>
      <button onClick={handleDecreaseClick} data-testid="decrease-click">-</button>
    </div>
  );
};

export default Child;
