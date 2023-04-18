import {NameSpace} from '../../utils/const';
import {State} from '../../types/state';

export const getGenre = (state: State) => state[NameSpace.Genres].activeGenre;
