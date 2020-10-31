import { combineReducers } from 'redux';

import todosReducer from './todos.reducer';

const rootReducer = combineReducers({
  todos: todosReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
