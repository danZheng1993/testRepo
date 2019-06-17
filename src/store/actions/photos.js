import { createAction } from 'redux-actions';

export const actionTypes = {
  FETCH_PHOTOS: '[PHOTOS] - Get photos',
  FETCH_PHOTOS_SUCCESS: '[PHOTOS] - Get photos Success',
  FETCH_PHOTOS_FAILURE: '[PHOTOS] - Get photos Failure',
  UPDATE_ORDER: '[PHOTOS] - Update Order',
  REACH_END: '[PHOTOS] - Reach End',
};

export const UpdateOrder = createAction(actionTypes.UPDATE_ORDER);
export const FetchPhotos = createAction(actionTypes.FETCH_PHOTOS);
export const FetchPhotosSuccess = createAction(actionTypes.FETCH_PHOTOS_SUCCESS);
export const FetchPhotosFailure = createAction(actionTypes.FETCH_PHOTOS_FAILURE);
