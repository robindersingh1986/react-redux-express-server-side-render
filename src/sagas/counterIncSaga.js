import { call, put } from 'redux-saga/effects';
import { postData } from '../utils/http';
import api from '../api';
import * as action from '../actions';

export default function* counterIncSaga(payload) {
  yield put({ type: 'POST_COUNTER_INCREMENT_SUCCESS' });
  //const actionType = action.POST_COUNTER_INCREMENT;

  //This is not async
  //const url = api[actionType];

   /*  try {
      const result = yield call(postData, { 'method': 'post', url, data: payload.data });
      // dispatch a success action to the store with the new result
      console.log('result in saga : ', result);
      yield put({ type: 'POST_COUNTER_DATA_SUCCESS', result });

    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: `${actionType}_FAILURE`, error });
    } */
  }

  