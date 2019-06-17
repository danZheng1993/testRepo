import { handleActions } from 'redux-actions';
import { produce } from 'immer';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';

const initialState = {
  photos: [],
  current_status: 0,
  errors: null,
  orderBy: 'latest',
};

export default handleActions(
  {
    [userActionTypes.USER_SELECTED]: (state, action) =>
      produce(state, draft => {
        draft.photos = [];
      }),
    [actionTypes.UPDATE_ORDER]: (state, action) => 
      produce(state, draft => {
        const { type, payload } = action;
        draft.current_status = type;
        draft.photos = [];
        draft.orderBy = payload;
      }),
    [actionTypes.FETCH_PHOTOS]: (state, action) =>
      produce(state, draft => {
        const { type } = action;
        draft.current_status = type;
        draft.errors = null;
      }),
    [actionTypes.FETCH_PHOTOS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const { type, payload } = action;
        draft.current_status = type;
        draft.photos = [...state.photos, ...payload];
        draft.errors = null;
      }),
    [actionTypes.FETCH_PHOTOS_FAILURE]: (state, action) =>
      produce(state, draft => {
        const { type, payload } = action;
        draft.currentStatus = type;
        draft.error = payload;
      }),
  },
  initialState
);
