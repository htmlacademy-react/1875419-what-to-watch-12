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
