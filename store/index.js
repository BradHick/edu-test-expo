import { init } from '@rematch/core';
import models from '../model';
import createRematchPersist from '@rematch/persist'

const persistPlugin = createRematchPersist({
  whitelist: ['auth'],
  throttle: 5000,
  version: 1,
})

const store = init( {
  models,
  plugins: [persistPlugin]
} );
window.store = store;

export default store;