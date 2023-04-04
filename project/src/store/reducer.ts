import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, getFilteredFilms, loadFilms } from './action';
import { Films } from '../types/films';
import { GenreName } from '../const';
//import { filmsData } from '../mocks/films';

type InitialState = {
  activeGenre: GenreName;
  films: Films[];
}
const initialState: InitialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: []
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
    });
});

export {reducer};
