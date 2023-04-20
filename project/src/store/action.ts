import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../utils/const';


export const setFilmsDataLoadingStatus = createAction<boolean>('setFilmsDataLoadingStatus');

export const setPromoFilmLoadingStatus = createAction<boolean>('setPromoFilmLoadingStatus');
export const setChoosedFilmLoadingStatus = createAction<boolean>('setChoosedFilmLoadingStatus');
export const setFilmCommentsLoadingStatus = createAction<boolean>('setFilmCommentsLoadingStatus');
export const setSimilarFilmsLoadingStatus = createAction<boolean>('setSimilarFilmsLoadingStatus');
export const setFavoriteFilmsLoadingStatus = createAction<boolean>('setFavoriteFilmsLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
