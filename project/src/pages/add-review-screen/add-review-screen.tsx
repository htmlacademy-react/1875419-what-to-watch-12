import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Logo from '../../components/logo/logo';
import ReviewText from '../../components/review/review-text';
import ReviewRating from '../../components/review/review-rating';
import UserBlock from '../../components/user-header/user-block';
function AddReviewScreen(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <Breadcrumbs />

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <ReviewRating />
          <ReviewText />
        </form>
      </div>

    </section>
  );
}

export default AddReviewScreen;
