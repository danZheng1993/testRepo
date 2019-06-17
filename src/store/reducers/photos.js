import { handleActions } from 'redux-actions';
import { produce } from 'immer';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';

const initialState = {
  photos: [],
  current_status: 0,
  current_page: 0,
  total: 0,
  errors: null,
  orderBy: 'latest',
};

export default handleActions(
  {
    [userActionTypes.USER_SELECTED]: (state, action) =>
      produce(state, draft => {
        draft.photos = [];
        draft.current_page = 0;
        draft.total = action.payload.total_photos;
      }),
    [actionTypes.REACH_END]: (state, action) =>
      produce(state, draft => {
        const { type } = action;
        draft.current_status = type;
      }),
    [actionTypes.UPDATE_ORDER]: (state, action) => 
      produce(state, draft => {
        const { type, payload } = action;
        draft.current_status = type;
        draft.photos = [];
        draft.current_page = 0;
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
        const { type, payload: { photos, current_page } } = action;
        draft.current_status = type;
        draft.photos = [...state.photos, ...photos];
        draft.current_page = current_page;
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
