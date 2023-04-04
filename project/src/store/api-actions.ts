import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { AppDispatch, State } from '../types/state';
import {Films} from '../types/films';
import { loadFilms } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Films[]>('films');
      dispatch(loadFilms(data));
    });

