import { count } from 'console';
import React, { useReducer, useState } from 'react';

const initialState = {
  count: 0,
  name: ''
};

const CounterWithName: React.FC<{}> = () => {
  const [state, dispatch] =
    useReducer(
      (prev: typeof initialState, next: Partial<typeof initialState>) => ({ ...prev, ...next }),
      initialState
    );

  return (
    <div className="container text-center">
      <h1>{state.count}</h1>
      <h2>{state.name || '💩'}</h2>
      <button type="button" className="btn btn-danger mr-3" onClick={() => dispatch({ count: state.count - 1 })}> Decrement</button>
      <button type="button" className="btn btn-success" onClick={() => dispatch({ count: state.count + 1 })}> Increment</button>
      <input type="text" className="form-control w-50 mx-auto mt-3" onChange={(e) => dispatch({ name: e.target.value })} />
    </div >

  );
};

export default CounterWithName;