<template>
  <div :class="$options.name">
    <augmented-image
      v-for="augmentedImage in augmentedImages"
      :key="augmentedImage._uid"
      :details="augmentedImage.image.details"
      :image="augmentedImage.image.image"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { GET_GALLERY } from '../store/action-types';
import { HOME } from '../store/modules/gallery';

import AugmentedImage from '../components/AugmentedImage.vue';

export default {
  name: `Home`,
  components: {
    AugmentedImage,
  },
  computed: {
    ...mapState(`gallery`, [
      `augmentedImages`,
    ]),
  },
  async fetch({ store }) {
    await store.dispatch(`gallery/${GET_GALLERY}`, HOME);
  },
};
</script>
