import React, { useEffect, useRef } from 'react';
import Button from './components/Button';

type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** a dict object with any number of properties of the same type */
  dict1: {
    // [key: string]: MyTypeHere;
  };
  // dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON)*/
  onInput: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** an optional prop (VERY COMMON!) */
  optional?: number;
};

type UsefulProps = {
  children: React.ReactNode; // best, accepts everything
  functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
  style?: React.CSSProperties; // to pass through style props
}


function App() {

  return (
    <div className='App container'>
      <Button variant='contained' style={{ fontSize: 40 }}>
        Hello, World!
      </Button>
      <Button variant='outlined' className='text-danger'>
        Hello, World!
      </Button>
      <Button variant='text'>
        Hello, World!
      </Button>
    </div>
  );
}

export default App;
