import { put, takeEvery, takeLatest, call, select } from 'redux-saga/effects';

import { unsplashClient } from 'api/unsplash';

import { actionTypes } from '../actions/users';
import { getUserPage, getUserSearchKey } from '../selectors';

function* fetchUsers(action) {
  const searchKey = yield select(getUserSearchKey);
  const page = yield select(getUserPage);
  try {
    const result = yield call(unsplashClient.search.users(searchKey, page + 1, 30));
    yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: result });
  } catch (err) {
    yield put({ type: actionTypes.FETCH_USERS_FAILURE, payload: err });
  }
}

export default function* UsersSaga() {
  yield takeEvery(actionTypes.FETCH_USERS, fetchUsers);
  yield takeLatest(actionTypes.UPDATE_SEARCH_FILTER, fetchUsers);
}
