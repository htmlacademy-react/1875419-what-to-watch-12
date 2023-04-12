import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { Genres } from '../../types/genres';
import { GenreName } from '../../const';

const initialState: Genres = {
  activeGenre: GenreName.ALL_GENRES,
};

export const genresData = createSlice({
  name: NameSpace.Genres,
  initialState,
  reducers: {
    chooseGenre(state, action: { payload: GenreName }) {
      state.activeGenre = action.payload;
    },

  },
});

export const { chooseGenre } = genresData.actions;
