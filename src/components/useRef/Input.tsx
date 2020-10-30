import React, { useEffect, useRef } from 'react';

const Input: React.FC<{}> = ({ }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * null! is a non-null assertion operator (the !).
   * It asserts that any expression before it is not null or undefined,
   * so if you have useRef<HTMLElement>(null!)
   * it means that you're instantiating the ref with a current value of null
   * but lying to TypeScript that it's not null.
   */
  // const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // inputRef.current.focus();
    // inputRef.current?.focus()
  }, []);

  return (
    <div className='container mt-4'>
      <label htmlFor="name">Name:</label>
      <input type='text' className='form-control' id='name' ref={inputRef} />
    </div>
  );
};

export default Input;
