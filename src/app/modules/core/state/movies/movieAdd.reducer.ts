import { createReducer, on } from '@ngrx/store';
import { addMovie, removeMovie } from './movies.actions';

export const initialState: ReadonlyArray<string> = [];

export const movieAddReducer = createReducer(
  initialState,
  on(addMovie, (state, { name }) => state.filter((id) => id !== name)),
  on(removeMovie, (state, { name }) => {
    if (state.indexOf(name) > -1) return state;

    return [...state, name];
  })
);