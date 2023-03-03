import UserPageHeader from '../../components/user-page-header/user-page-header';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <UserPageHeader />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
