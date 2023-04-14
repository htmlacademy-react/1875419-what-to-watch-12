import { createAsyncThunk } from '@reduxjs/toolkit';
import axios,{ AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { AppDispatch, State } from '../types/state';
import {Films} from '../types/films';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { Reviews } from '../types/reviews';
import { NewReview } from '../types/reviews';


export const fetchFilmsAction = createAsyncThunk<Films[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Films[]>('films');
    return data;
  });

export const fetchPromoFilmAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Films>('promo');
    return data;
  });

export const fetchChoosedFilmAction = createAsyncThunk<Films | null, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchChoosedFilm',
  async (id, { extra: api}) => {

    try {
      const {data} = await api.get<Films>(`films/${id}`);
      return data;
    } catch(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  });

export const fetchFilmCommentsAction = createAsyncThunk<Reviews[] , number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilmComments',
  async (id, { extra: api}) => {
    try {
      const {data} = await api.get<Reviews[]>(`comments/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  });

export const fetchSimilarFilmsAction = createAsyncThunk<Films[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchSimilarFilms',
  async (id, { extra: api}) => {
    try {
      const {data} = await api.get<Films[]>(`films/${id}/similar`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  });

export const fetchFavoriteFilmsAction = createAsyncThunk<Films[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/fetchFavoriteFilms',
    async (_arg, { extra: api}) => {
      try {
        const {data} = await api.get<Films[]>('favorite');
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        }
        throw error;
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
        const id = state.FILMS.choosedFilm?.id;
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
  async (_arg, {extra: api}) => {
    await api.get('login');
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>('login', {email, password});
      saveToken(token);
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
  async (_arg, { extra: api}) => {
    try {
      await api.delete('logout');
      dropToken();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    }
  },
);

