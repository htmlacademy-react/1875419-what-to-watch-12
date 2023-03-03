import AuthorizedUserHeader from '../authorized-user-header/authorized-user-header';

function UserPageHeader(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <AuthorizedUserHeader />
    </header>
  );
}

export default UserPageHeader;
