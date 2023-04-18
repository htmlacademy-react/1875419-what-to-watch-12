import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import { Genres } from '../../types/genres';

export const initialState: Genres = {
  activeGenre: 'All genres',
  filteredFilms: []
};

export const genresDataSlice = createSlice({
  name: NameSpace.Genres,
  initialState,
  reducers: {
    chooseGenre(state, action: { payload: string }) {
      state.activeGenre = action.payload;
    }
  },
});

export const { chooseGenre } = genresDataSlice.actions;
