<template lang="pug">
header.the-global-header
  h1.title Unicode Symbols

  nav.nav
    ul.list
      li.item Unicode Symbol List
      li.item Samples
      li.item Licence and Thanks
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
