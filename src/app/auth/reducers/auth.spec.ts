import * as fromAuth from './auth';
import { reducer } from './auth';
import { Login, LoginSuccess, Logout } from '../actions/auth';
import { Authenticate } from '../models/authenticate';
import { Account } from '../models/account';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromAuth.initialState);
    });
  });

  describe('wrong login payload', () => {
    it('should NOT authenticate a user', () => {
      const user = { email: 'foo@bar.baz' } as Authenticate;
      const createAction = new Login(user);

      const expectedResult = fromAuth.initialState;

      const result = reducer(fromAuth.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should add a user set loggedIn to true in auth state', () => {
      const account = {} as Account;
      const createAction = new LoginSuccess({account});

      const expectedResult = {
        loggedIn: true,
        account: {},
      };

      const result = reducer(fromAuth.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('LOGOUT', () => {
    it('should logout a user', () => {
      const initialState = {
        loggedIn: true,
        account: {},
      } as fromAuth.State;
      const createAction = new Logout();

      const expectedResult = fromAuth.initialState;

      const result = reducer(initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
