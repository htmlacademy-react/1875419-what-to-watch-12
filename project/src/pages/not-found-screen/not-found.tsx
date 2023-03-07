import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  const pageTitleStyle = {
    textAlign: 'center',
    fontSize: '3em',
    marginBottom: '1.25em',
    color: 'red'
  } as const;
  const pageTextStyle = {
    textAlign: 'center',
    color: '#c9c0bb',
    fontSize: '1.25em',
  } as const;
  const mainLinkStyle = {
    width: 'fit-content',
    margin: '0 auto',
    padding: '0 2%'
  } as const;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <h1 className="visually-hidden">WTW</h1>
        <Logo />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Page Not Found</h2>
        <h2 className="page-title" style={pageTitleStyle}>You are on the 404 page</h2>
        <p style={pageTextStyle}>
          Sorry, but it seems that we do&apos;t have something you&apos;ve been looking for...
        </p>
        <p style={pageTextStyle}>
          Try to go back. There&apos;re plenty of interesting things we still do have.
        </p>
        <Link to='/' style={mainLinkStyle} className="logo__link">
          BACK TO THE MAIN PAGE
        </Link>
      </section>

    </div>
  );
}

export default NotFoundScreen;
