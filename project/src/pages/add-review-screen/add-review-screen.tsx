import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Films } from '../../types/films';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-header/user-block';
import { useParams } from 'react-router-dom';

type ReviewProp = {
  films: Films[];
}

function AddReviewScreen({films}: ReviewProp): JSX.Element {
  const {id} = useParams();
  const filmChoosed = films.find((film) => film.id === Number(id));
  return (
    <section className="film-card film-card--full" style={{backgroundColor: filmChoosed?.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmChoosed?.backgroundImage} alt={filmChoosed?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <Breadcrumbs films={films} />

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
