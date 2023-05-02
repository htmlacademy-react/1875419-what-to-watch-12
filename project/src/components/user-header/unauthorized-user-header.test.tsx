import { act, render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import UnauthorizedUserHeader from './unauthorized-user-header';
import ProviderWrapper from '../../utils/jest';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import { AppRoute, AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const mockFilms = makeFakeFilms();
const mockFilm = mockFilms[0];
const mockReviews = [makeFakeReview(), makeFakeReview()];
const mockUser = makeFakeUser();
const store = mockStore({
  [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, userData: mockUser },
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


describe('Component: unauthorized user header', () => {
  it('should render correctly', () => {

    render(
      <ProviderWrapper>
        <UnauthorizedUserHeader />
      </ProviderWrapper>,
    );

    const textElement = screen.getByText(/Sign in/i);

    expect(textElement).toBeInTheDocument();
  });

  it('should redirect to auth page when user clicked to sign out link', async () => {
    history.push(AppRoute.Main);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={`${AppRoute.SignIn}`}
              element={<h1>This is authorization page</h1>}
            />
            <Route
              path='*'
              element={<UnauthorizedUserHeader />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    await act(async () => await userEvent.click(screen.getByText(/Sign in/i)));
    expect(screen.getByText('This is authorization page')).toBeInTheDocument();
  });
});
