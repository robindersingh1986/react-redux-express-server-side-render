import { all, takeLatest } from 'redux-saga/effects';
import * as action from '../actions';
//import userLoginSaga from './userLoginSaga';
import getDataSaga from './getDataSaga';
import counterIncSaga from './counterIncSaga';
import counterDecSaga from './counterDecSaga';

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield takeLatest(action.GET_DATA, getDataSaga);
  yield takeLatest(action.POST_COUNTER_INCREMENT, counterIncSaga);
  yield takeLatest(action.POST_COUNTER_DECREMENT, counterDecSaga);
}


// // single entry point to start all Sagas at once
export function *rootSaga() {
  yield all([
    watcherSaga(),
  ]);
}
