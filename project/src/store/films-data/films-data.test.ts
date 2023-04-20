import { filmsDataSlice, initialState } from './films-data.slice';
import { makeFakeFilm, makeFakeReview } from '../../utils/mocks';
import { fetchFilmsAction, fetchSimilarFilmsAction, fetchPromoFilmAction, fetchChoosedFilmAction, fetchFilmCommentsAction, fetchFavoriteFilmsAction } from '../api-actions';

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsDataSlice.reducer(initialState, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should return array of films objects', () => {
    const films = [makeFakeFilm(), makeFakeFilm()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchFilmsAction.fulfilled.type,
      payload: films
    }))
      .toEqual({
        ...initialState,
        films
      });
  });

  it('should set isFilmsDataLoading flag if fetchFilmsAction pending', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchFilmsAction.pending.type }))
      .toEqual({...initialState, isFilmsDataLoading: true });
  });

  it('should return array of similar films objects', () => {
    const similarFilms = [makeFakeFilm(), makeFakeFilm()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchSimilarFilmsAction.fulfilled.type,
      payload: similarFilms
    }))
      .toEqual({
        ...initialState,
        similarFilms
      });
  });

  it('should set isSimilarFilmsLoading flag if fetchSimilarFilmsAction pending', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchFilmsAction.pending.type }))
      .toEqual({...initialState, isFilmsDataLoading: true });
  });

  it('should set isSimilarFilmsLoading flag if fetchSimilarFilmsAction rejected', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchFilmsAction.rejected.type }))
      .toEqual({...initialState, isFilmsDataLoading: false });
  });

  it('should return promo film object', () => {
    const promoFilm = [makeFakeFilm()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchPromoFilmAction.fulfilled.type,
      payload: promoFilm
    }))
      .toEqual({
        ...initialState,
        promoFilm
      });
  });

  it('should set isPromoFilmLoading flag if fetchPromoFilmAction pending', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchPromoFilmAction.pending.type }))
      .toEqual({...initialState, isPromoFilmLoading: true });
  });

  it('should return choosed film object', () => {
    const choosedFilm = [makeFakeFilm()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchChoosedFilmAction.fulfilled.type,
      payload: choosedFilm
    }))
      .toEqual({
        ...initialState,
        choosedFilm
      });
  });

  it('should set isChoosedFilmLoading flag if fetchChoosedFilmAction pending', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchChoosedFilmAction.pending.type }))
      .toEqual({...initialState, isChoosedFilmLoading: true });
  });

  it('should set choosedFilmError flag if fetchChoosedFilmAction rejected', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchChoosedFilmAction.rejected.type }))
      .toEqual({...initialState, choosedFilmError: true });
  });

  it('should return array of comments objects', () => {
    const filmComments = [makeFakeReview(), makeFakeReview()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchFilmCommentsAction.fulfilled.type,
      payload: filmComments
    }))
      .toEqual({
        ...initialState,
        filmComments
      });
  });

  it('should set isFilmCommentsLoading flag if fetchFilmCommentsAction pending', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchFilmCommentsAction.pending.type }))
      .toEqual({...initialState, isFilmCommentsLoading: true });
  });

  it('should set isFilmCommentsLoading flag if fetchFilmCommentsAction rejected', () => {
    expect(filmsDataSlice.reducer(initialState, { type: fetchFilmCommentsAction.rejected.type }))
      .toEqual({...initialState, isFilmCommentsLoading: false });
  });


  it('should return array of favorite films objects', () => {
    const favoriteFilms = [makeFakeFilm(), makeFakeFilm()];
    expect(filmsDataSlice.reducer(initialState, {
      type: fetchFavoriteFilmsAction.fulfilled.type,
      payload: favoriteFilms
    }))
      .toEqual({
        ...initialState,
        favoriteFilms
      });
  });
});
