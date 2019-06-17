import Unsplash from 'unsplash-js';

import { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } from './const';

export const unsplashClient = new Unsplash({
  applicationId: UNSPLASH_ACCESS_KEY,
  secret: UNSPLASH_SECRET_KEY
});
