import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsState } from '../../types/films';
import { fetchFilmsAction, fetchChoosedFilmAction, fetchFavoriteFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction, fetchFilmCommentsAction } from '../api-actions';

const initialState: FilmsState = {
  films: [],
  isLoading: false,
  promoFilm: null,
  choosedFilm: null,
  filmComments: [],
  similarFilms: [],
  favoriteFilms: [],
  isFilmsDataLoading: false,
  isPromoFilmLoading: false,
  isChoosedFilmLoading: false,
  isFilmCommentsLoading: false,
  isSimilarFilmsLoading: false,
  isFavoriteFilmsLoading: false,
};

const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
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
          state.films = action.payload;
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
        })
      .addCase(fetchChoosedFilmAction.pending,
        (state) => {
          state.isChoosedFilmLoading = true;
        })
      .addCase(fetchChoosedFilmAction.rejected,
        (state) => {
          state.isChoosedFilmLoading = false;
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
        });
  }
});

export default filmsData.actions;
