import App from './components/app/app';
import { filmsData } from './mocks/films';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { reviewsData } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      films = {filmsData}
      reviews = {reviewsData}
    />
  </React.StrictMode>,
);
