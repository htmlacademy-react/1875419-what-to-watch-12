import { render, screen} from '@testing-library/react';
import ProviderWrapper from '../../utils/jest';
import { makeFakeFilm } from '../../utils/mocks';
import PlayButton from './play-button';

const film = makeFakeFilm();
describe('Component: PlayButton', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <PlayButton id={film.id} />
      </ProviderWrapper>,
    );

    const textElement = screen.getByText('Play');

    expect(textElement).toBeInTheDocument();
  });
});
