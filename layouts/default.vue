<template>
  <div :class="$options.name">
    <nuxt :class="`${$options.name}__main`"/>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>

<style>
body {
  margin: 0;
  padding: 1em;
  background-color: #000;
  font-family: sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.LayoutDefault__main {
  margin-right: auto;
  margin-left: auto;
  max-width: 52em;
}
</style>
