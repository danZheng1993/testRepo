import { put, takeEvery, takeLatest, call, select } from 'redux-saga/effects';

import { searchUsers } from 'api';

import { actionTypes } from '../actions/users';
import { getUserPage, getUserSearchKey } from '../selectors';

function* fetchUsers(action) {
  const searchKey = yield select(getUserSearchKey);
  if (searchKey !== '') {
    const page = yield select(getUserPage);
    try {
      const result = yield call(searchUsers, searchKey, page + 1, 30);
      yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: {...result, current_page: page + 1} });
    } catch (err) {
      yield put({ type: actionTypes.FETCH_USERS_FAILURE, payload: err });
    }
  } else {
    yield put({ type: actionTypes.REACH_END })
  }
}

export default function* UsersSaga() {
  yield takeEvery(actionTypes.FETCH_USERS, fetchUsers);
  yield takeLatest(actionTypes.UPDATE_SEARCH_FILTER, fetchUsers);
}
