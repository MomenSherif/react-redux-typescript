import React, { useState } from 'react';

type Props = {
  counter: number;
}

const Counter: React.FC<Props> = ({ counter }) => {
  const [count, setCount] = useState<number | null>(counter);

  // const decrementHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  //   setCount(prevCount => prevCount - 1);
  // };

  const decrementHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setCount(prevCount => prevCount !== null ? prevCount - 1 : null);
  };

  const incrementHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setCount(prevCount => prevCount !== null ? prevCount + 1 : null);
  };

  return (
    <div className="container text-center">
      <h1>{count}</h1>
      <button type="button" className="btn btn-danger mr-3" onClick={decrementHandler}>Decrement</button>
      <button type="button" className="btn btn-success" onClick={incrementHandler}>Increment</button>
    </div >

  );
};

export default Counter;