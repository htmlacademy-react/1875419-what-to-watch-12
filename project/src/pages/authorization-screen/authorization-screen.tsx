import SignInForm from '../../components/sign-in-form/sign-in-form';
import Footer from '../../components/footer/footer';
import UnauthorizedUserHeader from '../../components/unauthorized-user-header/unauthorized-user-header';

function AuthorizationScreen(): JSX.Element {
  return (
    <div className="user-page">
      <UnauthorizedUserHeader />
      <SignInForm />
      <Footer />
    </div>
  );
}

export default AuthorizationScreen;
