import { genresDataSlice, initialState, chooseGenre } from './genres-data.slice';

describe('Reducer: genresData', () => {
  it('without additional parameters should return initial state', () => {
    expect(genresDataSlice.reducer(initialState, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should return choosed active genre', () => {
    expect(genresDataSlice.reducer(initialState, chooseGenre('Comedy')))
      .toEqual({...initialState, activeGenre: 'Comedy'});
  });
}
);
