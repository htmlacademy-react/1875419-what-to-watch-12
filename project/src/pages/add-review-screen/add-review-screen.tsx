import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { getChoosedFilm } from '../../store/films-data/films-data.selectors';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-header/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchChoosedFilmAction } from '../../store/api-actions';


function AddReviewScreen(): JSX.Element {
  const {id: idUrl} = useParams();
  const id = Number(idUrl);
  const dispatch = useAppDispatch();
  const filmChoosed = useAppSelector(getChoosedFilm);

  useEffect(()=>{
    if (!filmChoosed) {
      dispatch(fetchChoosedFilmAction(id));
    }
  }, [id, dispatch, filmChoosed]);


  return (
    <section className="film-card film-card--full" style={{ backgroundColor: filmChoosed?.backgroundColor }} data-testid="review">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmChoosed?.backgroundImage} alt={filmChoosed?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs film={filmChoosed} />
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
