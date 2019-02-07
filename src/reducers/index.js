import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import counterReducer from './counter';

export default (history) => combineReducers({
  router: connectRouter(history),
  count: counterReducer,
});
