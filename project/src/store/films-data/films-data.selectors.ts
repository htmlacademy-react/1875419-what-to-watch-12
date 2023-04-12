import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilms = (state: State) => state[NameSpace.Films].films;

export const getPromoFilm = (state: State) => state[NameSpace.Films].promoFilm;

export const getSimilarFilms = (state: State) => state[NameSpace.Films].similarFilms;

export const getChoosedFilm = (state: State) => state[NameSpace.Films].choosedFilm;

export const getFavoriteFilms = (state: State) => state[NameSpace.Films].favoriteFilms;

export const getFilmComments = (state: State) => state[NameSpace.Films].filmComments;

export const getFilmsDataLoadingStatus = (state: State) => state[NameSpace.Films].isFilmsDataLoading;

