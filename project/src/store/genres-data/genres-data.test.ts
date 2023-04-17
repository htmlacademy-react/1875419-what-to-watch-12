import { genresData, initialState, chooseGenre } from './genres-data.slice';

describe('Reducer: genresData', () => {
  it('without additional parameters should return initial state', () => {
    expect(genresData.reducer(initialState, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should return choosed active genre', () => {
    expect(genresData.reducer(initialState, chooseGenre('Comedy')))
      .toEqual({...initialState, activeGenre: 'Comedy'});
  });
}
);
