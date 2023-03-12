export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export function FilmRating(rating: number | undefined): string {
  if (rating === undefined) {
    return 'No rating';
  }
  if (rating < 3) {
    return 'Bad';
  }
  if (3 <= rating && rating < 5) {
    return 'Normal';
  }
  if (5 <= rating && rating < 8) {
    return 'Good';
  }
  if (8 <= rating && rating < 10) {
    return 'Very good';
  }
  if (rating >= 10) {
    return 'Awsome';
  }
  return 'No rating';
}
