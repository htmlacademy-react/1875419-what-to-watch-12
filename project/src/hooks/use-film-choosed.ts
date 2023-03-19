import { useParams } from 'react-router-dom';
import { Films } from '../types/films';

function useFilmChoosed(films: Films[]) {
  const params = useParams();
  return films.find((film) => film.id === Number(params.id));
}

export default useFilmChoosed;
