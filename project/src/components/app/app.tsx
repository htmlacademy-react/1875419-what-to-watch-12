import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import AuthorizationScreen from '../../pages/authorization-screen/authorization-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Films } from '../../types/films';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Reviews } from '../../types/reviews';


type MainScreenProp = {
  films: Films[];
  reviews: Reviews[];
  myFilms: Films[];
}


function App({films, reviews, myFilms}: MainScreenProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {
            <MainScreen
              films={films}
              myFilms={myFilms}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<AuthorizationScreen />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen films={films} myFilms={myFilms} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen
                myFilms={myFilms}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={films}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
