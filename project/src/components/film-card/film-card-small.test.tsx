import { act, render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import { makeFakeFilms, makeFakeReview, makeFakeUser } from '../../utils/mocks';
import { AppRoute, AuthorizationStatus, DEFAULT_RENDERED_FILMS_QUANTITY, GenreName, NameSpace } from '../../utils/const';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import FilmCard from './film-card-small';
import FilmCardSmall from './film-card-small';
import { Route, Routes } from 'react-router-dom';


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


describe('Component: FilmCard', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmCard name={mockFilm.name} previewImage={mockFilm.previewImage} id={mockFilm.id} previewVideoLink={mockFilm.previewVideoLink} />
        </HistoryRouter>
      </Provider>,
    );

    const filmNameElement = screen.getByText(`${mockFilm.name}`);

    expect(filmNameElement).toBeInTheDocument();

  });

  it('should set active card state when mouse over and out', async () => {


    const fakeSetActiveCard = jest.fn();
    const fakeSetInactiveCard = jest.fn();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmCardSmall name={mockFilm.name} previewImage={mockFilm.previewImage} id={mockFilm.id} previewVideoLink={mockFilm.previewVideoLink} />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('card-article')).toBeInTheDocument();
    screen.getByTestId('card-article').onmouseover = fakeSetActiveCard;
    await act(async () => await userEvent.hover(screen.getByTestId('card-article'))) ;
    expect(fakeSetActiveCard).toBeCalledTimes(1);
    screen.getByTestId('card-article').onmouseout = fakeSetInactiveCard;
    await act(async () => await userEvent.unhover(screen.getByTestId('card-article'))) ;
    expect(fakeSetInactiveCard).toBeCalledTimes(1);
  });

  it('should redirect to film page when user clicked to card link', async () => {
    history.push(AppRoute.Main);
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={`films/${mockFilm.id}`}
            element={<h1>This is film page</h1>}
          />
          <Route
            path='*'
            element={<FilmCardSmall name={mockFilm.name} previewImage={mockFilm.previewImage} id={mockFilm.id} previewVideoLink={mockFilm.previewVideoLink} />}
          />
        </Routes>
      </HistoryRouter>);
    await act(async () => await userEvent.click(screen.getByText(`${mockFilm.name}`)));
    expect(screen.getByText('This is film page')).toBeInTheDocument();
  });
});

