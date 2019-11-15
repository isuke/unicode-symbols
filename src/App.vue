<template lang="pug">
#app
  the-global-header.header

  keep-alive
    router-view.main
</template>

<script lang="coffee">
import TheGlobalHeader from "./components/TheGlobalHeader.vue"

export default
  components:
    "the-global-header": TheGlobalHeader
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--global-header-height) 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0;

  > .header {
    grid-row: 1;
    grid-column: 1;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--global-header-height);
    z-index: calc(var(--base-z-index) + 1);
  }

  > .main {
    grid-row: 2;
    grid-column: 1;
  }
}
</style>
