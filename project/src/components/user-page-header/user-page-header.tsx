import AuthorizedUserHeader from '../authorized-user-header/authorized-user-header';
import Logo from '../logo/logo';

function UserPageHeader(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo />

      <AuthorizedUserHeader />
    </header>
  );
}

export default UserPageHeader;
