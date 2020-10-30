import React, { useReducer, useState } from 'react';

const counterReducerInitialState = {
  count: 0,
};

type ACTIONS =
  | { type: 'INCREMENT', payload: number }
  | { type: 'DECREMENT', payload: number }


const counterReducer = (state: typeof counterReducerInitialState, action: ACTIONS): typeof counterReducerInitialState => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter: React.FC<{}> = () => {
  const [state, dispatch] = useReducer(counterReducer, counterReducerInitialState);

  return (
    <div className="container text-center">
      <h1>{state.count}</h1>
      <button type="button" className="btn btn-danger mr-3" onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>Decrement</button>
      <button type="button" className="btn btn-success" onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>Increment</button>
    </div >

  );
};

export default Counter;