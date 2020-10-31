import { ActionTypes, AppThunk } from './index';
import { Dispatch, Action } from 'redux';
import { Todo } from '../types/Todo';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

export const SET_TODOS_LOADING = 'SET_TODOS_LOADING';
export const SET_TODOS_SUCCESS = 'SET_TODOS_SUCCESS';
export const SET_TODOS_ERROR = 'SET_TODOS_ERROR';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface SetTodosLoadingAction {
  type: typeof SET_TODOS_LOADING;
}

export interface SetTodosSuccessAction {
  type: typeof SET_TODOS_SUCCESS;
  todos: Todo[];
}

export interface SetTodosErrorAction {
  type: typeof SET_TODOS_ERROR;
  error: string;
}

export type TodosActionTypes =
  | SetTodosLoadingAction
  | SetTodosSuccessAction
  | SetTodosErrorAction


const setTodosLoading = (): SetTodosLoadingAction => ({
  type: 'SET_TODOS_LOADING',
});

const setTodosSuccess = (todos: Todo[]): SetTodosSuccessAction => ({
  type: 'SET_TODOS_SUCCESS',
  todos,
});

const setTodosError = (error: string): SetTodosErrorAction => ({
  type: 'SET_TODOS_ERROR',
  error,
});

export const fetchTodos = (): AppThunk<Promise<any>> => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    // dispatch({ type: 'SET_TODOS_LOADING' });

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);

  }
}
