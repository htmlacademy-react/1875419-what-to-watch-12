import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getGenre = (state: State) => state[NameSpace.Genres].activeGenre;
