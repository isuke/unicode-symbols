<template lang="pug">
header.the-global-header
  router-link.title(tag="h1", to="/", exact) Unicode Symbols

  nav.nav
    ul.list
      router-link.item(tag="li", to="/sample") Samples
      router-link.item(tag="li", to="/tool") Tools
      router-link.item(tag="li", to="/license") License
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
$global-bg-color-night: #252525;
$global-ft-color-night: #fafafd;

.the-global-header {
  display: inline-flex;
  flex-direction: row;
  align-items: stretch;
  padding-left:   var(--space-size-l);
  padding-right:  var(--space-size-l);
  background-color: $global-bg-color-night;
  color: $global-ft-color-night;

  > .title {
    align-self: center;
    padding-top:    var(--space-size-s);
    padding-bottom: var(--space-size-s);
    padding-right:  var(--space-size-l);
    font-size: var(--ft-size-l);
    cursor: pointer;

    &::before { content: "〖" }
    &::after  { content: "〗" }
  }

  > .nav {
    flex: 1;
    display: inline-flex;
    align-items: stretch;

    > .list {
      flex: 1;
      display: inline-flex;
      align-items: stretch;

      > .item {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding-left: var(--space-size-m);
        padding-right: var(--space-size-m);
        padding-bottom: var(--space-size-xs);
        margin-top: var(--space-size-xs);

        font-size: var(--ft-size-m);

        cursor: pointer;
      }
    }
  }
}
</style>
