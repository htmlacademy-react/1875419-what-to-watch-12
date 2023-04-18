import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_RENDERED_FILMS_QUANTITY, FILMS_TO_RENDER_QUANTITY, NameSpace } from '../../utils/const';
import { FilmsState } from '../../types/films';
import { fetchFilmsAction, fetchChoosedFilmAction, fetchFavoriteFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction, fetchFilmCommentsAction, postFavoriteFilm } from '../api-actions';

export const initialState: FilmsState = {
  films: [],
  promoFilm: null,
  choosedFilm: null,
  choosedFilmError: false,
  filmComments: [],
  similarFilms: [],
  favoriteFilms: [],
  isFilmsDataLoading: false,
  isPromoFilmLoading: false,
  isChoosedFilmLoading: false,
  isFilmCommentsLoading: false,
  isSimilarFilmsLoading: false,
  isFavoriteFilmsLoading: false,
  renderedFilmsCount: DEFAULT_RENDERED_FILMS_QUANTITY
};

export const filmsDataSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    renderMoreFilms(state) {
      state.renderedFilmsCount += FILMS_TO_RENDER_QUANTITY;
    },
    resetRenderedFilms(state) {
      state.renderedFilmsCount = DEFAULT_RENDERED_FILMS_QUANTITY;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsAction.fulfilled,
        (state, action) => {
          state.films = action.payload;
          state.isFilmsDataLoading = false;
        })
      .addCase(fetchFilmsAction.pending,
        (state) => {
          state.isFilmsDataLoading = true;
        })
      .addCase(fetchSimilarFilmsAction.fulfilled,
        (state, action) => {
          state.similarFilms = action.payload;
          state.isSimilarFilmsLoading = false;
        })
      .addCase(fetchSimilarFilmsAction.pending,
        (state) => {
          state.isSimilarFilmsLoading = true;
        })
      .addCase(fetchSimilarFilmsAction.rejected,
        (state) => {
          state.isSimilarFilmsLoading = false;
        })
      .addCase(fetchPromoFilmAction.fulfilled,
        (state, action) => {
          state.promoFilm = action.payload;
          state.isPromoFilmLoading = false;
        })
      .addCase(fetchPromoFilmAction.pending,
        (state) => {
          state.isPromoFilmLoading = true;
        })
      .addCase(fetchChoosedFilmAction.fulfilled,
        (state, action) => {
          state.choosedFilm = action.payload;
          state.isChoosedFilmLoading = false;
          state.choosedFilmError = false;
        })
      .addCase(fetchChoosedFilmAction.pending,
        (state) => {
          state.isChoosedFilmLoading = true;
          state.choosedFilmError = false;
        })
      .addCase(fetchChoosedFilmAction.rejected,
        (state) => {
          state.isChoosedFilmLoading = false;
          state.choosedFilmError = true;
        })
      .addCase(fetchFilmCommentsAction.fulfilled,
        (state, action) => {
          state.filmComments = action.payload;
          state.isFilmCommentsLoading = false;
        })
      .addCase(fetchFilmCommentsAction.pending,
        (state) => {
          state.isFilmCommentsLoading = true;
        })
      .addCase(fetchFilmCommentsAction.rejected,
        (state) => {
          state.isFilmCommentsLoading = false;
        })
      .addCase(fetchFavoriteFilmsAction.fulfilled,
        (state, action) => {
          state.favoriteFilms = action.payload;
          state.isFilmCommentsLoading = false;
        })
      .addCase(postFavoriteFilm.fulfilled,
        (state, action) => {
          const film = action.payload;
          if (film){
            if(film.isFavorite) {
              state.films = state.films.concat(film);
            } else {
              state.films = state.films.filter((item)=> item.id !== film.id);
            }
          }});
  }
});

export const { renderMoreFilms, resetRenderedFilms } = filmsDataSlice.actions;
