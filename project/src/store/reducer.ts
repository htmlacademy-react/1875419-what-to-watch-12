import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, getFilteredFilms } from './action';
import { GenreName } from '../const';
import { filmsData } from '../mocks/films';

const initialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: filmsData
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilteredFilms, (state, action) => {
      state.films = action.payload;
    });
});

export {reducer};
