import Vue from 'vue';

const Img = {
  install() {
    Vue.prototype.$img = function $img(
      src = ``,
      width = 0,
      height = 0,
      filters = {},
    ) {
      const parts = [`img2.storyblok.com`];

      if (height > 0 || width > 0) {
        parts.push(`${width}x${height}`);
      }

      if (Object.keys(filters).length) {
        parts.push(`filters:${Object.keys(filters).map(key => `${key}(${filters[key]})`).join(`:`)}`);
      }

      return src.replace(`a.storyblok.com`, parts.join(`/`));
    };
  },
};

Vue.use(Img);
