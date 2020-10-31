import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer, { RootState } from '../reducers';
import { ActionTypes } from '../actions';


export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, ActionTypes>));

export type AppDispatch = typeof store.dispatch