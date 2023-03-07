import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import AuthorizationScreen from '../../pages/authorization-screen/authorization-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found';
import { AppRoute } from '../../const';


type MainScreenProp = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: MainScreenProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {<MainScreen title={title} genre={genre} year={year}/>}
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
          path={AppRoute.MyList}
          //TODO
          element={<MyListScreen/>}
        />
        <Route
          path={AppRoute.AddReview}
          //TODO
          element={<AddReviewScreen/>}
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
    </BrowserRouter>
  );
}


export default App;
