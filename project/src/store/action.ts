import { createAction } from '@reduxjs/toolkit';
import { GenreName, AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { Reviews } from '../types/reviews';

export const chooseGenre = createAction<GenreName>('chooseGenre');

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

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
