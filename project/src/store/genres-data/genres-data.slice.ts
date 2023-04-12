import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { Genres } from '../../types/genres';
//import { GenreName } from '../../const';
import { Films } from '../../types/films';

const initialState: Genres = {
  activeGenre: 'All genres',
  filteredFilms: []
};

export const genresData = createSlice({
  name: NameSpace.Genres,
  initialState,
  reducers: {
    chooseGenre(state, action: { payload: string }) {
      //eslint-disable-next-line
      console.log(action.payload);
      state.activeGenre = action.payload;
    },
    getFilteredFilms(state, action: { payload: Films[] }) {
      state.filteredFilms = action.payload;
    },

  },
});

export const { chooseGenre, getFilteredFilms } = genresData.actions;
