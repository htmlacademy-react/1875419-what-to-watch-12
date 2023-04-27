import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import { AppRoute, AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';


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

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);
    render(fakeApp);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render "MyList" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MyList);
    render(fakeApp);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });

  it('should render MoviePageScreen when user navigate to "/films/filmId"', () => {
    history.push(`/films/${mockFilm.id}`);
    render(fakeApp);

    expect(screen.getByText(`${mockFilm.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilm.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilm.released}`)).toBeInTheDocument();
    expect(screen.getByText('More like this')).toBeInTheDocument();
  });

  it('should render "ErrorPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

});
