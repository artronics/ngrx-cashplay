import * as auth from '../actions/auth';

export interface State {
  loggedIn: boolean;
  account: Account | null;
}

export const initialState: State = {
  loggedIn: false,
  account: null,
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        account: action.payload.account,
      };
    }

    case auth.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.account;
