import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { Reviews } from '../types/reviews';


export const loadFilms = createAction<Films[]>('loadFilms');

export const renderMoreFilms = createAction('/renderedFilms');

export const resetRenderedFilms = createAction('/renderedFilmsByDefault');

export const loadPromoFilm = createAction<Films>('loadPromoFilm');

export const getFilmById = createAction<Films>('getFilmById');

export const getSimilarFilms = createAction<Films[]>('getSimilarFilms');

export const getFilmComments = createAction<Reviews[]>('getFilmComments');

export const getFavoriteFilms = createAction<Films[]>('getFavoriteFilms');

export const addReview = createAction<Reviews[]>('addReview');

export const setError = createAction<string | null>('setError');

export const setFilmsDataLoadingStatus = createAction<boolean>('setFilmsDataLoadingStatus');

export const setPromoFilmLoadingStatus = createAction<boolean>('setPromoFilmLoadingStatus');
export const setChoosedFilmLoadingStatus = createAction<boolean>('setChoosedFilmLoadingStatus');
export const setFilmCommentsLoadingStatus = createAction<boolean>('setFilmCommentsLoadingStatus');
export const setSimilarFilmsLoadingStatus = createAction<boolean>('setSimilarFilmsLoadingStatus');
export const setFavoriteFilmsLoadingStatus = createAction<boolean>('setFavoriteFilmsLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
