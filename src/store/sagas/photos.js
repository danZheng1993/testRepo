import { put, takeEvery, call, select } from 'redux-saga/effects';

import { unsplashClient } from 'api/unsplash';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';
import { getSelectedUserName, getPhotoPage, getPhotoOrder } from '../selectors';

function* fetchPhotos(action) {
  const username = yield select(getSelectedUserName);
  const page = yield select(getPhotoPage);
  const orderBy = yield select(getPhotoOrder);
  try {
    const result = yield call(unsplashClient.users.photos(username, page + 1, 20, orderBy))
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
