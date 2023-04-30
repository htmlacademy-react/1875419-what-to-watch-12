import { act, render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import UserBlock from './user-block';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

describe('Component: User block', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    const avatarElement = screen.getByAltText(`${mockUser.name}`);
    const signOutElement = screen.getByText(/Sign out/i);

    expect(avatarElement).toBeInTheDocument();
    expect(signOutElement).toBeInTheDocument();
  });

  it('should redirect to Myfilms page when user clicked on avatar', async () => {
    history.push(AppRoute.Main);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={`${AppRoute.MyList}`}
              element={<h1>This is MyList page</h1>}
            />
            <Route
              path='*'
              element={<UserBlock />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    await act(async () => await userEvent.click(screen.getByTestId('user-avatar')));
    expect(screen.getByText('This is MyList page')).toBeInTheDocument();
  });

  it('should redirect to Login page when user clicked on SignOut link', async () => {
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
              element={<UserBlock />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    await act(async () => await userEvent.click(screen.getByText(/Sign out/i)));

    expect(screen.getByText('This is authorization page')).toBeInTheDocument();
  });
});
