import { createAction } from 'redux-actions';

export const actionTypes = {
  FETCH_USERS: '[USERS] - Get users',
  FETCH_USERS_SUCCESS: '[USERS] - Get users Success',
  FETCH_USERS_FAILURE: '[USERS] - Get users Failure',
  UPDATE_SEARCH_FILTER: '[USERS] - Update user search filter',
  USER_SELECTED: '[USERS] - Selected User',
  REACH_END: '[USERS] - Reac End',
};

export const FetchUsers = createAction(actionTypes.FETCH_USERS);
export const FetchUsersSuccess = createAction(actionTypes.FETCH_USERS_SUCCESS);
export const FetchUsersFailure = createAction(actionTypes.FETCH_USERS_FAILURE);
export const UpdateSearchFilter = createAction(actionTypes.UPDATE_SEARCH_FILTER);
export const UserSelected = createAction(actionTypes.USER_SELECTED);