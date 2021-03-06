import * as fromLoginPage from './login-page';
import { reducer } from './login-page';
import { Login, LoginFailure, LoginSuccess } from '../actions/auth';
import { Authenticate } from '../models/authenticate';
import { Account } from '../models/account';

describe('LoginPageReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromLoginPage.initialState);
    });
  });

  describe('LOGIN', () => {
    it('should make pending to true', () => {
      const user = { email: 'test@bar.foo' } as Authenticate;
      const createAction = new Login(user);

      const expectedResult = {
        error: null,
        pending: true,
      };

      const result = reducer(fromLoginPage.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should have no error and no pending state', () => {
      const account = {} as Account;
      const createAction = new LoginSuccess({account});

      const expectedResult = {
        error: null,
        pending: false,
      };

      const result = reducer(fromLoginPage.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('LOGIN_FAILURE', () => {
    it('should have an error and no pending state', () => {
      const error = 'login failed';
      const createAction = new LoginFailure(error);

      const expectedResult = {
        error: error,
        pending: false,
      };

      const result = reducer(fromLoginPage.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
