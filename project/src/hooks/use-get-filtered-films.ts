import { Films } from '../types/films';

function useGetFilteredFilms(films: Films[], genre: string): Films[] {
  const filteredFilms = films.filter((film) => film.genre === genre);
  return filteredFilms;
}

export default useGetFilteredFilms;
