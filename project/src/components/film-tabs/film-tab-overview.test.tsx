import { render, screen} from '@testing-library/react';
import ProviderWrapper from '../../utils/jest';
import { makeFakeFilm } from '../../utils/mocks';
import FilmTabOverview from './film-tab-overview';

const mockFilm = makeFakeFilm();
describe('Component: filmTabs overview', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <FilmTabOverview film={mockFilm} />
      </ProviderWrapper>,
    );

    const scoresTextElement = screen.getByText(`${mockFilm.scoresCount} ratings`);
    const ratingTextElement = screen.getByText(`${mockFilm.rating}`);
    const descriptionTextElement = screen.getByText(`${mockFilm.description}`);
    const directorTextElement = screen.getByText(`Director: ${mockFilm.director}`);
    const starringTextElement = screen.getByText(`Starring: ${mockFilm.starring.join(', ')} and others`);

    expect(scoresTextElement).toBeInTheDocument();
    expect(ratingTextElement).toBeInTheDocument();
    expect(descriptionTextElement).toBeInTheDocument();
    expect(directorTextElement).toBeInTheDocument();
    expect(starringTextElement).toBeInTheDocument();
  });
});
