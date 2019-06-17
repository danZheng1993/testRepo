import get from 'lodash.get';

export const getPhotoOrder = state => state.photos.orderBy;
export const getPhotoPage = state => state.photos.current_page;
export const getTotalPhoto = state => state.photos.total;

export const getUserSearchKey = state => state.users.keyword;
export const getUserPage = state => state.users.current_page;
export const getSelectedUserName = state => get(state.users, 'selected_user.username', null);

export const getSelectedUserInfo = state => get(state.users, 'selected_user', null);

export const getUserResult = state => ({
  results: state.users.results,
  total: state.users.total,
  totalPages: state.users.total_pages,
  currentPage: state.users.current_page,
  currentStatus: state.users.current_status,
  selectedUser: state.users.selected_user,
});

export const getPhotoResult = state => ({
  photos: state.photos.photos,
})