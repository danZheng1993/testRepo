import { unsplashClient } from './unsplash';

export const searchUsers = (keyword, page, perPage = 30) =>
  unsplashClient.search.users(keyword, page, perPage)
    .then(response => response.json());

export const getPhotos = (username, page, perPage = 30, orderBy='latest') =>
  unsplashClient.users.photos(username, page, perPage, orderBy)
    .then(response => response.json());