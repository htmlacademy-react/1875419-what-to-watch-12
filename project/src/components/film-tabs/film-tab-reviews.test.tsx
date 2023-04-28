import { render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import FilmTabReviews from './film-tab-reviews';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const mockFilms = makeFakeFilms();
const mockFilm = mockFilms[0];
const mockReviews = [makeFakeReview(), makeFakeReview()];
const mockReview = mockReviews[0];
const mockUser = makeFakeUser();
const store = mockStore({
  [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth, userData: mockUser },
  [NameSpace.Films]: {
    films: mockFilms, isFilmsDataLoading: false,
    promoFilm: mockFilm, isPromoFilmLoading: false,
    choosedFilm: mockFilm, choosedFilmError: false, isChoosedFilmLoading: false,
    filmComments: mockReviews, isFilmCommentsLoading: false,
    similarFilms: mockFilms, isSimilarFilmsLoading: false,
    favoriteFilms: mockFilms, isFavoriteFilmsLoading: false,
    renderedFilmsCount: DEFAULT_RENDERED_FILMS_QUANTITY
  },
  [NameSpace.Genres]: { activeGenre: GenreName.ALL_GENRES, filteredFilms: [] },
});
const history = createMemoryHistory();

describe('Component: filmTabs reviews', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmTabReviews reviews={mockReviews} />
        </HistoryRouter>
      </Provider>,
    );

    const reviewTextElement = screen.getByText(`${mockReview.comment}`);
    const reviewAuthorNameElement = screen.getByText(`${mockReview.user.name}`);
    const ratingElement = screen.getByText(`${mockReview.rating}`);


    expect(reviewTextElement).toBeInTheDocument();
    expect(reviewAuthorNameElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });
});
