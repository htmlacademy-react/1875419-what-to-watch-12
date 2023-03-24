import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import { filmsData } from './mocks/films';
import { reviewsData } from './mocks/reviews';

const favoriteFilmsData = filmsData.filter((film) => film.isFavorite );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        films = {filmsData}
        reviews = {reviewsData}
        myFilms = {favoriteFilmsData}
      />
    </Provider>
  </React.StrictMode>,
);
