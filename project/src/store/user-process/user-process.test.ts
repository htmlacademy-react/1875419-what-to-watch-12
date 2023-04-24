import { userProcessSlice } from './user-process.slice';
import { UserProcess } from '../../types/user-process';
import { AuthorizationStatus } from '../../utils/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { makeFakeUser } from '../../utils/mocks';

const fakeUser = makeFakeUser();

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {authorizationStatus: AuthorizationStatus.Unknown, userData: null};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcessSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userData: null});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled and save user data', () => {
      expect(userProcessSlice.reducer(state, { type: checkAuthAction.fulfilled.type, payload: fakeUser }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userData: fakeUser});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcessSlice.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled and save user data', () => {
      expect(userProcessSlice.reducer(state, { type: loginAction.fulfilled.type, payload: fakeUser }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userData: fakeUser});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcessSlice.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcessSlice.reducer({...state, userData: fakeUser}, { type: logoutAction.fulfilled.type }))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth, userData: null});
    });
  });
});
