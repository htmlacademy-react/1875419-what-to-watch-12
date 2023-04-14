import { Reviews } from './reviews';

export type Films = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export type FilmsState = {
  films: Films[];
  promoFilm: Films | null;
  choosedFilm: Films | null;
  choosedFilmError: boolean;
  filmComments: Reviews[];
  similarFilms: Films[];
  favoriteFilms: Films[];
  isFilmsDataLoading: boolean;
  isPromoFilmLoading: boolean;
  isChoosedFilmLoading: boolean;
  isFilmCommentsLoading: boolean;
  isSimilarFilmsLoading: boolean;
  isFavoriteFilmsLoading: boolean;
  renderedFilmsCount: number;
}
