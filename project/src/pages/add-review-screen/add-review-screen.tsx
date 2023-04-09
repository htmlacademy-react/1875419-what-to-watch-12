import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-header/user-block';
import { useAppSelector } from '../../hooks';


function AddReviewScreen(): JSX.Element {
  const filmChoosed = useAppSelector((state) => state.choosedFilm);
  return (
    <section className="film-card film-card--full" style={{backgroundColor: filmChoosed?.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmChoosed?.backgroundImage} alt={filmChoosed?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Breadcrumbs film={filmChoosed} />
          {/* TODO: засунуть крошки в юзер блок */}
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmChoosed?.posterImage} alt={filmChoosed?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review" >
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
