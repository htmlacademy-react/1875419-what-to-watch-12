import { render, screen} from '@testing-library/react';
import ProviderWrapper from '../../utils/jest';
import Breadcrumbs from './breadcrumbs';
import { makeFakeFilm } from '../../utils/mocks';

const film = makeFakeFilm();
describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <Breadcrumbs film={film} />
      </ProviderWrapper>,
    );

    const textElement = screen.getByText('Add review');
    const filmName = screen.getByText(`${film.name}`);

    expect(textElement).toBeInTheDocument();
    expect(filmName).toBeInTheDocument();
  });
});
