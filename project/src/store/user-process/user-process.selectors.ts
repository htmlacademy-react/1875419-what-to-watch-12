import {NameSpace} from '../../utils/const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../utils/const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
