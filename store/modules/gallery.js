import { GET_GALLERY } from '../action-types';
import { SET_GALLERY } from '../mutation-types';
import api from '../../utils/api';

export const HOME = `home`;

// function adaptAugmentedImage({
//   image,
//   link,
//   text,
//   title,
//   _uid,
// }) {
//   return {
//     id: _uid,
//     image: {
//       url: image,
//     },
//     link: link.url,
//     text,
//     title,
//   };
// }

export default {
  namespaced: true,
  actions: {
    async [GET_GALLERY]({ commit }, slug) {
      const response = await api.get(`cdn/stories/${slug}`);
      const { story } = response.data;
      const id = story.uuid;
      const data = story.content;

      commit(SET_GALLERY, {
        augmentedImages: data.augmented_images,
        id,
      });
    },
  },
  mutations: {
    [SET_GALLERY](state, gallery) {
      Object.assign(state, gallery);
    },
  },
  state: () => ({
    augmentedImages: [],
    id: null,
  }),
};
