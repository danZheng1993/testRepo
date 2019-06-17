import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getPhotos } from 'api';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';
import { getSelectedUserName, getPhotoOrder, getPhotoPage, getTotalPhoto } from '../selectors';

function* fetchPhotos(action) {
  const username = yield select(getSelectedUserName);
  const orderBy = yield select(getPhotoOrder);
  const page = yield select(getPhotoPage);
  const totalPhoto = yield select(getTotalPhoto);
  if (Math.ceil(totalPhoto / 30) > page) {
    try {
      const result = yield call(getPhotos, username, page + 1, 30, orderBy);
      yield put({ type: actionTypes.FETCH_PHOTOS_SUCCESS, payload: { photos: result, current_page: page + 1 } });
    } catch (err) {
      yield put({ type: actionTypes.FETCH_PHOTOS_FAILURE, payload: err });
    }
  } else {
    yield put({ type: actionTypes.REACH_END })
  }
}

export default function* PhotosSaga() {
  yield takeEvery(actionTypes.FETCH_PHOTOS, fetchPhotos);
  yield takeEvery(actionTypes.UPDATE_ORDER, fetchPhotos);
  yield takeEvery(userActionTypes.USER_SELECTED, fetchPhotos);
}
