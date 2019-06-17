import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { actionTypes } from '../actions/users';

const initialState = {
  results: [],
  total: 0,
  total_pages: 0,
  current_page: 0,
  current_status: 0,
  errors: null,
  keyword: '',
  selected_user: null,
};

export default handleActions(
  {
    [actionTypes.UPDATE_SEARCH_FILTER]: (state, action) => 
      produce(state, draft => {
        const { type, payload } = action;
        draft.current_status = type;
        draft.keyword = payload;
        draft.results = [];
        draft.current_page = 0;
      }),
    [actionTypes.REACH_END]: (state, action) =>
      produce(state, draft => {
        const { type } = action;
        draft.current_status = type;
      }),
    [actionTypes.FETCH_USERS]: (state, action) =>
      produce(state, draft => {
        const { type } = action;
        draft.current_status = type;
        draft.errors = null;
      }),
    [actionTypes.FETCH_USERS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const { type, payload: { results, current_page, total_pages, total } } = action;
        draft.current_status = type;
        draft.results = [...state.results, ...results];
        draft.current_page = current_page;
        draft.total_pages = total_pages;
        draft.total = total;
        draft.errors = null;
      }),
    [actionTypes.FETCH_USERS_FAILURE]: (state, action) =>
      produce(state, draft => {
        const { type, payload } = action;
        draft.currentStatus = type;
        draft.error = payload;
      }),
    [actionTypes.USER_SELECTED]: (state, action) =>
      produce(state, draft => {
        const { type, payload } = action;
        draft.currentStatus = type;
        draft.selected_user = payload;
      })
  },
  initialState
);
