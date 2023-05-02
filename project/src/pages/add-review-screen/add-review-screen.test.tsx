import { render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import { AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import AddReviewScreen from './add-review-screen';
import HistoryRouter from '../../components/history-route/history-route';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const mockFilms = makeFakeFilms();
const mockFilm = mockFilms[0];
const mockReviews = [makeFakeReview(), makeFakeReview()];
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


describe('Component: Add review page', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewScreen />
        </HistoryRouter>
      </Provider>,
    );

    const filmNameElement = screen.getByTestId('review');

    expect(filmNameElement).toBeInTheDocument();
  });
});
