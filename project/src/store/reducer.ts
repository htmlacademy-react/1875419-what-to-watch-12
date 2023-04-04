import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, getFilteredFilms, loadFilms, setError } from './action';
import { Films } from '../types/films';
import { GenreName } from '../const';
//import { filmsData } from '../mocks/films';

type InitialState = {
  activeGenre: GenreName;
  films: Films[];
  error: string | null;
}
const initialState: InitialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: [],
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilteredFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
