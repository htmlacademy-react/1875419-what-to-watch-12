import { Routes, Route } from 'react-router-dom';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import AuthorizationScreen from '../../pages/authorization-screen/authorization-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { checkAuthAction } from '../../store/api-actions';
import { useEffect } from 'react';


function App(): JSX.Element {

  const isAuthorized = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(checkAuthAction());
  },[dispatch]);


  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element = {
          <MainScreen />
        }
      />
      <Route
        path={AppRoute.SignIn}
        element={<AuthorizationScreen />}
      />
      <Route
        path={AppRoute.Film}
        element={<MoviePageScreen />}
      />
      <Route
        path={AppRoute.FilmDetails}
        element={<MoviePageScreen />}
      />
      <Route
        path={AppRoute.FilmReviews}
        element={<MoviePageScreen />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute isAuthorized={isAuthorized === AuthorizationStatus.Auth}>
            <MyListScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute isAuthorized={isAuthorized === AuthorizationStatus.Auth}>
            <AddReviewScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Player}
        element={<PlayerScreen />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}


export default App;
