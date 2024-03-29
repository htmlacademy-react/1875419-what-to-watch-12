export type User = {
  id: number;
  name: string;
}

export type Reviews = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export type NewReview = {
  comment: string;
  rating: number;
}
