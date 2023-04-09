import { Reviews } from '../../types/reviews';

const LOCALE = 'en-US';

type ReviewsProp = {
  reviews: Reviews[];
}

function FilmTabReviews({reviews}: ReviewsProp): JSX.Element {
  const filmReviews = reviews;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {/* TODO: сделать вывод по три комментария в колонке */}
        {filmReviews.map((review) => {
          const keyValue = `${review.id}-${review.user.id}-${review.date}`;
          const date = new Date(review.date);
          return (
            <div className="review" key={keyValue}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{date.toLocaleDateString(LOCALE, {month: 'long', day: 'numeric', year: 'numeric'})}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default FilmTabReviews;
