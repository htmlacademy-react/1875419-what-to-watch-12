import { createSelector } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilms = (state: State) => state[NameSpace.Films].films;

export const getPromoFilm = (state: State) => state[NameSpace.Films].promoFilm;

export const getSimilarFilms = (state: State) => state[NameSpace.Films].similarFilms;

export const getChoosedFilm = (state: State) => state[NameSpace.Films].choosedFilm;

export const getChoosedFilmError = (state: State) => state[NameSpace.Films].choosedFilmError;

export const getFavoriteFilms = (state: State) => state[NameSpace.Films].favoriteFilms;

export const getFilmComments = (state: State) => state[NameSpace.Films].filmComments;

export const getFilmsDataLoadingStatus = (state: State) => state[NameSpace.Films].isFilmsDataLoading;

export const getPromoFilmLoadingStatus = (state: State) => state[NameSpace.Films].isPromoFilmLoading;

export const getChoosedFilmLoadingStatus = (state: State) => state[NameSpace.Films].isChoosedFilmLoading;

export const getFavoriteFilmsLoadingStatus = (state: State) => state[NameSpace.Films].isFavoriteFilmsLoading;

export const getSimilarFilmsLoadingStatus = (state: State) => state[NameSpace.Films].isSimilarFilmsLoading;

export const getFilmCommentsLoadingStatus = (state: State) => state[NameSpace.Films].isFilmCommentsLoading;

export const getFilmsToRenderQuantity = (state: State) => state[NameSpace.Films].renderedFilmsCount;

export const getFavoriteFilmsAmount = (state: State): number => state[NameSpace.Films].favoriteFilms.length;

export const getIsFilmFavorite = (filmId:number) => createSelector(
  getFavoriteFilms,
  (films):boolean=> films.some((film)=> film.id === filmId)
);


