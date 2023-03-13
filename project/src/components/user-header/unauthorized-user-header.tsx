import Logo from '../logo/logo';

function UnauthorizedUserHeader(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo />

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
  );
}

export default UnauthorizedUserHeader;
