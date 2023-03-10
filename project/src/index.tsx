import App from './components/app/app';
import { filmsData } from './mocks/films';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { reviewsData } from './mocks/reviews';

const favoriteFilmsData = filmsData.filter((film) => film.isFavorite );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      films = {filmsData}
      reviews = {reviewsData}
      myFilms = {favoriteFilmsData}
    />
  </React.StrictMode>,
);
