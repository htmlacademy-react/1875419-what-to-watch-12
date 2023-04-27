import { render, screen} from '@testing-library/react';
import ProviderWrapper from '../../utils/jest';
import { makeFakeFilm } from '../../utils/mocks';
import FilmTabDetails from './film-tab-details';

const film = makeFakeFilm();
describe('Component: filmTabs details', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <FilmTabDetails film={film} />
      </ProviderWrapper>,
    );

    const filmDirectorElement = screen.getByText('Director');
    const filmDirectorName = screen.getByText(`${film.director}`);
    const starringTextElement = screen.getByText('Starring');
    const runTimeTextElement = screen.getByText('Run Time');
    const genreTextElement = screen.getByText('Genre');
    const releasedTextElement = screen.getByText('Released');


    expect(filmDirectorElement).toBeInTheDocument();
    expect(filmDirectorName).toBeInTheDocument();
    expect(starringTextElement).toBeInTheDocument();
    expect(runTimeTextElement).toBeInTheDocument();
    expect(genreTextElement).toBeInTheDocument();
    expect(releasedTextElement).toBeInTheDocument();
  });
});
