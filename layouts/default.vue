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
.LayoutDefault__main {
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
  max-width: 52em;
}
</style>
