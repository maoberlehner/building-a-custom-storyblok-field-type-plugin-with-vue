import Vuex from 'vuex';

import gallery from './modules/gallery';

export default () => new Vuex.Store({
  modules: {
    gallery,
  },
});
