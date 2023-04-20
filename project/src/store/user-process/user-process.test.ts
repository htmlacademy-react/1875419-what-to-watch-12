import { userProcessSlice } from './user-process.slice';
import { UserProcess } from '../../types/user-process';
import { AuthorizationStatus } from '../../utils/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {authorizationStatus: AuthorizationStatus.Unknown};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcessSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcessSlice.reducer(state, { type: checkAuthAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcessSlice.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcessSlice.reducer(state, { type: loginAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcessSlice.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcessSlice.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });
});
