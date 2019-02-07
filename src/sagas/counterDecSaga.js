import { call, put } from 'redux-saga/effects';
import { postData } from '../utils/http';
import api from '../api';
import * as action from '../actions';

export default function* counterDecSaga(payload) {
  yield put({ type: 'POST_COUNTER_DECREMENT_SUCCESS' });
  }

  