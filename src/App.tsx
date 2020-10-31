import React, { useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { fetchTodos } from './actions/todos.actions';
import { RootState } from './reducers';
import { AppDispatch } from './store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function App() {
  const dispatch = useDispatch<AppDispatch>();
  // const { loading, todos, error } = useSelector(
  //   (state: RootState) => state.todos
  // );
  // const { loading, todos, error } = useTypedSelector((state) => state.todos);
  return <div className='App'></div>;
}

export default App;
