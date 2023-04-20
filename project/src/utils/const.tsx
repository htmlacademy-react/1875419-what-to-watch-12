export enum AppRoute {
  Main = '/',
  Genre = '/:genre',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmReviews = '/films/:id/reviews',
  FilmDetails = '/films/:id/details',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error = '/*'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }


const RatingValue = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

export function FilmRating(rating: number | undefined): string {
  if (rating === undefined) {
    return 'No rating';
  }
  if (rating < RatingValue.BAD) {
    return 'Bad';
  }
  if (RatingValue.BAD <= rating && rating < RatingValue.NORMAL) {
    return 'Normal';
  }
  if (RatingValue.NORMAL <= rating && rating < RatingValue.GOOD) {
    return 'Good';
  }
  if (RatingValue.GOOD <= rating && rating < RatingValue.VERY_GOOD) {
    return 'Very good';
  }
  if (rating >= RatingValue.VERY_GOOD) {
    return 'Awsome';
  }
  return 'No rating';
}

export enum GenreName {
  ALL_GENRES = 'All genres',
}

export const DEFAULT_RENDERED_FILMS_QUANTITY = 8;
export const FILMS_TO_RENDER_QUANTITY = 8;

export enum NameSpace {
  Films = 'FILMS',
  Genres = 'GENRES',
  User = 'USER',
}

export const TimeLeftFormat = {
  Long: '-HH:mm:ss',
  Short: '-mm:ss'
} as const;

export const SECONDS_PER_HOUR = 3600;

export const DATE_FORMAT = 'MMMM D, YYYY';

export const SignInError = {
  InvalidEmail: 'Please enter a valid email address.',
  InvalidPassword: 'Please use at least one number and one letter in your password',
} as const;

export const ValidationPattern = {
  Email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  Password: /([0-9].*[a-zA-Z])|([a-zA-Z].*[0-9])/,
} as const;

export const STEP_BACK = -1;
