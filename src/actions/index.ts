import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux';
import { TodosActionTypes } from './todos.actions';
import { RootState } from '../reducers';

export type ActionTypes =
  | TodosActionTypes


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>