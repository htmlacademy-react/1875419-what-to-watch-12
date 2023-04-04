import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, getFilteredFilms, loadFilms, setError, setFilmsDataLoadingStatus } from './action';
import { Films } from '../types/films';
import { GenreName } from '../const';

type InitialState = {
  activeGenre: GenreName;
  films: Films[];
  error: string | null;
  isFilmsDataLoading: boolean;
}
const initialState: InitialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: [],
  error: null,
  isFilmsDataLoading: false
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
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
