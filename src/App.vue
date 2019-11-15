<template lang="pug">
#app
  h1 Unicode Symbols

  unicode-list
</template>

<script lang="coffee">
import UnicodeList from "./components/UnicodeList.vue"

export default
  components:
    "unicode-list": UnicodeList
</script>

<style lang="scss">
#app {
}
</style>
