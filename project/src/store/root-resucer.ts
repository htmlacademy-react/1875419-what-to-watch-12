import {combineReducers} from '@reduxjs/toolkit';
import { filmsDataSlice } from './films-data/films-data.slice';
import { genresDataSlice } from './genres-data/genres-data.slice';
import {NameSpace} from '../utils/const';
import { userProcessSlice } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsDataSlice.reducer,
  [NameSpace.Genres]: genresDataSlice.reducer,
  [NameSpace.User]: userProcessSlice.reducer,
});
