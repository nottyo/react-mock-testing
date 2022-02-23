import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const handleChildClicked = (count: number) => {
    setCounter(count);
  };

  return (
    <div>
      <h1 data-testid="parent-title">This is Parent</h1>
      <Child name="Child Component" onIncreaseClick={() => handleChildClicked(counter + 1)} onDecreaseClick={() => handleChildClicked(counter - 1)} />
      <div data-testid="counter">{counter}</div>
    </div>
  );
};

export default Parent;