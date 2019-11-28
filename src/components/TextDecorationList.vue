<template lang="pug">
ul.text-decoration-list
  li.item
    p.decoration
      span ⎛
      span ⎜
      span ⎝
    .text
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      p Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    p.decoration
      span ⎞
      span ⎟
      span ⎠
  li.item
    p.decoration
      span ⎡
      span ⎢
      span ⎣
    .text
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      p Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    p.decoration
      span ⎤
      span ⎥
      span ⎦
  li.item
    p.decoration
      span ⎧
      span ⎪
      span ⎨
      span ⎪
      span ⎩
    .text
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      p Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      p Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    p.decoration
      span ⎫
      span ⎪
      span ⎬
      span ⎪
      span ⎭

</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
.text-decoration-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > .item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: var(--space-size-s);

    &:not(:last-child) { margin-bottom: var(--space-size-s); }

    > .decoration, > .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > .decoration {
      font-family: var(--unicode-font-family);
      font-size: var(--ft-size-l);
    }

    > .text {
      flex: 1;
      font-size: var(--ft-size-m);
    }
  }
}
</style>
