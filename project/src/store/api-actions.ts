import { createAsyncThunk } from '@reduxjs/toolkit';
import axios,{ AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { AppDispatch, State } from '../types/state';
import {Films} from '../types/films';
import { loadFilms, setFilmsDataLoadingStatus, requireAuthorization, getFavoriteFilms, getFilmById, getFilmComments, getSimilarFilms, loadPromoFilm } from './action';
import { AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { Reviews } from '../types/reviews';
import { NewReview } from '../types/reviews';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Films[]>('films');
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  });

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Films>('promo');
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadPromoFilm(data));
  });

export const fetchChoosedFilmAction = createAsyncThunk<Films | undefined, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchChoosedFilm',
  async (id, {dispatch, extra: api}) => {

    try {
      const {data} = await api.get<Films>(`films/${id}`);
      dispatch(getFilmById(data));
      return data;
    } catch(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  });

export const fetchFilmCommentsAction = createAsyncThunk<Reviews[] | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilmComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Reviews[]>(`comments/${id}`);
      dispatch(getFilmComments(data));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  });

export const fetchSimilarFilmsAction = createAsyncThunk<Films[] | undefined, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilmComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films[]>(`films/${id}/similar`);
      dispatch(getSimilarFilms(data));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  });

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/fetchFavoriteFilms',
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<Films[]>('favorite');
        dispatch(getFavoriteFilms(data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        }
      }
    });

export const addReviewAction = createAsyncThunk<Reviews[] | undefined, NewReview, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/review',
    async ({comment, rating}, {dispatch, getState, extra: api}) => {
      try {
        const state = getState();
        const id = state.choosedFilm?.id;
        if (id) {
          const {data} = await api.post<Reviews[]>(`comments/${id}`, {comment, rating});
          dispatch(fetchFilmCommentsAction(id));
          return data;}
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        }
      }
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('login');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>('login', {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete('logout');
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  },
);

