import AuthorizedUserHeader from '../../components/authorized-user-header/authorized-user-header';
import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';
import { FilmCardProp } from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';

type MyListProp = {
  films: Films[];
}

function MyListScreen({films}: MyListProp): JSX.Element {
  return (
    <div className="user-page">
      <AuthorizedUserHeader />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map(({previewImage, id, name, isFavorite}:FilmCardProp) => {
            if (isFavorite) {
              return(
                <FilmCard
                  key={id}
                  id={id}
                  name={name}
                  previewImage={previewImage}
                  isFavorite = {isFavorite}
                />
              );
            }
            return '';
          }
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
