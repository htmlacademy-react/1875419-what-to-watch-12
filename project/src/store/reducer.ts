import {createReducer} from '@reduxjs/toolkit';
import { chooseGenre, loadFilms, setError, setFilmsDataLoadingStatus, requireAuthorization, getFilmById, getSimilarFilms, getFilmComments, addReview, loadPromoFilm, getFavoriteFilms, renderMoreFilms, resetRenderedFilms } from './action';
import { Films } from '../types/films';
import { GenreName, AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, FILMS_TO_RENDER_QUANTITY } from '../const';
import { Reviews } from '../types/reviews';

type InitialState = {
  activeGenre: GenreName;
  films: Films[];
  renderedFilmsQuantity: number;
  promoFilm: Films | null;
  choosedFilm: Films | null;
  filmComments: Reviews[];
  similarFilms: Films[];
  favoriteFilms: Films[];
  error: string | null;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}
const initialState: InitialState = {
  activeGenre: GenreName.ALL_GENRES,
  films: [],
  renderedFilmsQuantity: DEFAULT_RENDERED_FILMS_QUANTITY,
  promoFilm: null,
  choosedFilm: null,
  filmComments: [],
  similarFilms: [],
  favoriteFilms: [],
  error: null,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.renderedFilmsQuantity = DEFAULT_RENDERED_FILMS_QUANTITY;
      state.activeGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(renderMoreFilms, (state) => {
      state.renderedFilmsQuantity += FILMS_TO_RENDER_QUANTITY;
    })
    .addCase(resetRenderedFilms, (state) => {
      state.renderedFilmsQuantity = DEFAULT_RENDERED_FILMS_QUANTITY;
    })
    .addCase(loadPromoFilm, (state, action) =>{
      state.promoFilm = action.payload;
    })
    .addCase(getFilmById, (state, action) => {
      state.choosedFilm = action.payload;
    })
    .addCase(getFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(getSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
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
