import { filmsDataSlice, initialState, renderMoreFilms, resetRenderedFilms } from './films-data.slice';
import { makeFakeFilm, makeFakeFilms, makeFakeReview } from '../../utils/mocks';
import { fetchFilmsAction, fetchSimilarFilmsAction, fetchPromoFilmAction, fetchChoosedFilmAction, fetchFilmCommentsAction, fetchFavoriteFilmsAction, postFavoriteFilmAction } from '../api-actions';

describe('Reducer: filmsDataSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsDataSlice.reducer(initialState, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should increase renderedFilmsCount by 8', () => {
    const increasedFilmsAmount = 16;
    expect(filmsDataSlice.reducer(initialState, renderMoreFilms()))
      .toEqual({...initialState, renderedFilmsCount: increasedFilmsAmount});
  });

  it('should set renderedFilmsCount to default value 8', () => {
    const resetedFilmsAmount = 8;
    const renderedFilmsCount = {...initialState};
    renderedFilmsCount.renderedFilmsCount = 16;
    expect(filmsDataSlice.reducer(renderedFilmsCount, resetRenderedFilms()))
      .toEqual({...initialState, renderedFilmsCount: resetedFilmsAmount});
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

  describe('postFavoriteFilmAction test', () => {
    const favoriteFilm = makeFakeFilm();
    favoriteFilm.isFavorite = true;
    const favoritesFilmsArr = makeFakeFilms();
    favoritesFilmsArr[0].isFavorite = true;
    favoritesFilmsArr[1].isFavorite = true;
    favoritesFilmsArr[2].isFavorite = true;
    favoritesFilmsArr[3].isFavorite = true;
    favoritesFilmsArr[4].isFavorite = true;
    const unFavoriteFilm = { ...favoritesFilmsArr[0] };
    unFavoriteFilm.isFavorite = false;

    it('should update favoriteFilms if postFavoriteFilmAction fulfilled', () => {
      expect(filmsDataSlice.reducer({ ...initialState, favoriteFilms: favoritesFilmsArr }, {
        type: postFavoriteFilmAction.fulfilled.type,
        payload: favoriteFilm
      }))
        .toEqual({
          ...initialState,
          favoriteFilms: [...favoritesFilmsArr, favoriteFilm]
        });
    });

    it('should remove favoriteFilm if postFavoriteFilmAction fulfilled', () => {
      expect(filmsDataSlice.reducer({ ...initialState, favoriteFilms: favoritesFilmsArr}, {
        type: postFavoriteFilmAction.fulfilled.type,
        payload: unFavoriteFilm
      }))
        .toEqual({
          ...initialState,
          favoriteFilms: [favoritesFilmsArr[1], favoritesFilmsArr[2], favoritesFilmsArr[3], favoritesFilmsArr[4]]
        });
    });
  });
});
