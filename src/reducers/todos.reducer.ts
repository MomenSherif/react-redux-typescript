import { TodosActionTypes } from './../actions/todos.actions';
import { Todo } from './../types/Todo';

interface State {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const todosReducerInitialState: State = {
  todos: [],
  loading: false,
  error: null
};

const todosReducer = (state = todosReducerInitialState, action: TodosActionTypes): State => {
  switch (action.type) {
    case 'SET_TODOS_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SET_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: action.todos,
      };

    case 'SET_TODOS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.type,
      };

    default:
      return state;
  }
}

export default todosReducer;