<template>
  <div
    :class="$options.name"
    :style="{ top: `${y}%`, left: `${x}%` }"
  >
    <button
      :class="`${$options.name}__marker`"
      @click="showContent"
    >
      <svg
        v-if="open"
        viewBox="0 0 476.737 476.737"
        width="32"
        height="32"
      >
        <path
          d="M238.369 0C106.726 0 0 106.726 0 238.369c0 131.675 106.726 238.369 238.369 238.369 131.675 0 238.369-106.694 238.369-238.369C476.737 106.726 370.043 0 238.369 0zm127.13 254.26h-254.26c-8.772 0-15.891-7.151-15.891-15.891 0-8.772 7.119-15.891 15.891-15.891h254.26c8.74 0 15.891 7.119 15.891 15.891 0 8.74-7.151 15.891-15.891 15.891z"
          fill="#FFF"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        width="32"
        height="32"
      >
        <path
          d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 0 1-4 0V28H13.5a2 2 0 0 1 0-4H24V14a2 2 0 0 1 4 0v10h10.5a2 2 0 0 1 0 4z"
          fill="#FFF"
        />
      </svg>
    </button>
    <div
      v-show="open"
      :class="`${$options.name}__content`"
    >
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
  data() {
    return {
      open: false,
    };
  },
  methods: {
    async showContent() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.AugmentedImageDetail {
  position: absolute;
  z-index: 100;
  margin-top: -1em;
  margin-left: -1em;
}

.AugmentedImageDetail__marker {
  position: relative;
  z-index: 1;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s;
}

.AugmentedImageDetail__marker:hover,
.AugmentedImageDetail__marker:focus {
  opacity: 0.8;
}

.AugmentedImageDetail__content {
  position: relative;
  width: 12.5em;
  margin-top: 1em;
  margin-left: -6.25em;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.9);
}

.AugmentedImageDetail__content::before {
  position: absolute;
  top: -2em;
  left: 50%;
  margin-left: -1em;
  border: 1em solid transparent;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  content: '';
}

.AugmentedImageDetail__content > * {
  margin-top: 0;
  margin-bottom: 0;
}

.AugmentedImageDetail__content h3:not(:first-child),
.AugmentedImageDetail__content p:not(:first-child),
.AugmentedImageDetail__content img:not(:first-child) {
  margin-top: 1em;
}
</style>
