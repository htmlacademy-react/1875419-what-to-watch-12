import { createAction } from '@reduxjs/toolkit';
import { GenreName } from '../const';
import { Films } from '../types/films';

export const chooseGenre = createAction<GenreName>('chooseGenre');

export const getFilteredFilms = createAction<Films[]>('getFilteredFilms');

export const loadFilms = createAction<Films[]>('loadFilms');
