<template lang="pug">
ul.logo-decoration-list
  li.item
    p.decoration
      span ↱
      span ↳
    p.text
      span Hello
      span World
    p.decoration
      span ↰
      span ↵
  li.item
    p.decoration
      span ⬐
      span ⬑
    p.text
      span Hello
      span World
    p.decoration
      span ⬎
      span ⬏
  li.item
    p.decoration
      span ⌈
      span ⌊
    p.text
      span Hello
      span World
    p.decoration
      span ⌉
      span ⌋
  li.item
    p.decoration
      span ⌌
      span ⌎
    p.text
      span Hello
      span World
    p.decoration
      span ⌍
      span ⌏
  li.item
    p.decoration
      span ⌜
      span ⌞
    p.text
      span Hello
      span World
    p.decoration
      span ⌝
      span ⌟
  li.item
    p.decoration
      span ⎾
      span ⎿
    p.text
      span Hello
      span World
    p.decoration
      span ⏋
      span ⏌
  li.item
    p.decoration
      span ╔
      span ╚
    p.text
      span Hello
      span World
    p.decoration
      span ╗
      span ╝
  li.item
    p.decoration
      span ╭
      span ╰
    p.text
      span Hello
      span World
    p.decoration
      span ╮
      span ╯
  li.item
    p.decoration
      span ◜
      span ◟
    p.text
      span Hello
      span World
    p.decoration
      span ◝
      span ◞
  li.item
    p.decoration
      span ⎛
      span ⎝
    p.text
      span Hello
      span World
    p.decoration
      span ⎞
      span ⎠
  li.item
    p.decoration
      span ⎡
      span ⎣
    p.text
      span Hello
      span World
    p.decoration
      span ⎤
      span ⎦
  li.item
    p.decoration
      span ⎧
      span ⎩
    p.text
      span Hello
      span World
    p.decoration
      span ⎫
      span ⎭
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
.logo-decoration-list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
  grid-auto-flow: row;
  grid-gap: var(--space-size-s);
  align-items: center;
  justify-content: center;
  text-align: center;

  > .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: 'Roboto';
    font-size: var(--ft-size-l);

    > .decoration, > .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > .text {
      margin-left: 0.2em;
      margin-right: 0.2em;
    }
  }
}
</style>
