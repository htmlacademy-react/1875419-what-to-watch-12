import AuthorizedUserHeader from '../../components/user-header/authorized-user-header';
import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';
import { FilmCardProp } from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';

type MyListProp = {
  myFilms: Films[];
}

function MyListScreen({myFilms}: MyListProp): JSX.Element {
  return (
    <div className="user-page">
      <AuthorizedUserHeader />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myFilms.map(({previewImage, id, name}:FilmCardProp) =>(
            <FilmCard
              key={id}
              id={id}
              name={name}
              previewImage={previewImage}
            />
          )
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
