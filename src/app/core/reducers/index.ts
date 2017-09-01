import * as fromRoot from '../../app.reducer';
import * as fromConfig from './config';

export interface CoreState {
  config: fromConfig.State;
}

export interface State extends fromRoot.State {
  core: CoreState;
}

export const reducers = {
  config: fromConfig.reducer,
};
