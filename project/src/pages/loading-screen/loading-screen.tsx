import Spinner from '../../components/spinner/spinner';
import '../../components/spinner/spinner.css';

function LoadingScreen(): JSX.Element {
  return (
    <section className="catalog">
      <p>Loading ...</p>
      <Spinner />
    </section>
  );
}

export default LoadingScreen;
