<template>
  <div :class="$options.name" :style="`top:${y};right:${x};`">
    <button
       :class="`${$options.name}__marker`"
    >
      show detail
    </button>
    <div :class="`${$options.name}__content`">
      <h3 v-if="title">
        {{ title }}
      </h3>
      <p v-if="text">
        {{ text }}
      </p>
      <img
        v-if="image"
        :src="$img(image, 200, 0, { format: `webp` })"
        :srcset="`${$img(image, 400, 0, { format: `webp` })} 2x`"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: `AugmentedImageDetail`,
  props: {
    image: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    x: {
      required: true,
      type: Number,
    },
    y: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style>
.AugmentedImageDetail {
  position: absolute;
}
</style>
