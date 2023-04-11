import { Films } from '../../types/films';
import UserBlock from './user-block';

type AuthorizedUserProp = {
  myFilms: Films[];
}

function AuthorizedUserHeader({myFilms}: AuthorizedUserProp): JSX.Element {
  return (
    <header className="page-header user-page__head">

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myFilms.length}</span></h1>
      <UserBlock />
    </header>
  );
}

export default AuthorizedUserHeader;
