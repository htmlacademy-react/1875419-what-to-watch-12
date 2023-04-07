import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, getFilteredFilms, loadFilms, setError, setFilmsDataLoadingStatus, requireAuthorization, getFilmById, getSimilarFilms, getFilmComments, addReview } from './action';
import { Films } from '../types/films';
import { GenreName, AuthorizationStatus } from '../const';
import { Reviews } from '../types/reviews';

type InitialState = {
  activeGenre: GenreName;
  films: Films[];
  choosedFilm: Films | null;
  filmComments: Reviews[];
  similarFilms: Films[];
  error: string | null;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}
const initialState: InitialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: [],
  choosedFilm: null,
  filmComments: [],
  similarFilms: [],
  error: null,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(getSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(getFilmById, (state, action) => {
      state.choosedFilm = action.payload;
    })
    .addCase(getFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
