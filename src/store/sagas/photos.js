import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getPhotos } from 'api';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';
import { getSelectedUserName, getPhotoOrder } from '../selectors';

function* fetchPhotos(action) {
  const username = yield select(getSelectedUserName);
  const orderBy = yield select(getPhotoOrder);
  try {
    const result = yield call(getPhotos, username, 1, 30, orderBy);
    yield put({ type: actionTypes.FETCH_PHOTOS_SUCCESS, payload: result });
  } catch (err) {
    yield put({ type: actionTypes.FETCH_PHOTOS_FAILURE, payload: err });
  }
}

export default function* PhotosSaga() {
  yield takeEvery(actionTypes.FETCH_PHOTOS, fetchPhotos);
  yield takeEvery(actionTypes.UPDATE_ORDER, fetchPhotos);
  yield takeEvery(userActionTypes.USER_SELECTED, fetchPhotos);
}
