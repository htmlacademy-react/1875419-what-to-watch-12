import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import { Genres } from '../../types/genres';
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
      state.activeGenre = action.payload;
    },
    getFilteredFilms(state, action: { payload: Films[] }) {
      state.filteredFilms = action.payload;
    },

  },
});

export const { chooseGenre, getFilteredFilms } = genresData.actions;
