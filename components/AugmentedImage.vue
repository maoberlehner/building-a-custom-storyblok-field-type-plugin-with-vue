<template>
  <div :class="$options.name">
    <img src="image" alt="">
    <augmented-image-detail
      v-for="(detail, index) in details"
      :key="index"
      v-bind="detail"
    />
  </div>
</template>

<script>
import AugmentedImageDetail from './AugmentedImageDetail.vue';

export default {
  name: `AugmentedImage`,
  components: {
    AugmentedImageDetail,
  },
  props: {
    details: {
      required: true,
      type: Array,
    },
    image: {
      required: true,
      type: String,
    },
  },
};
</script>
