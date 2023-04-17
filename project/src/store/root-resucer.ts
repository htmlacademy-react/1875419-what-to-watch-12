import {combineReducers} from '@reduxjs/toolkit';
import { filmsData } from './films-data/films-data.slice';
import { genresData } from './genres-data/genres-data.slice';
import {NameSpace} from '../utils/const';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Genres]: genresData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
