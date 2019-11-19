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
  //- li.item
  //-   p.decoration
  //-     span ╔
  //-     span ╚
  //-   p.text
  //-     span Hello
  //-     span World
  //-   p.decoration
  //-     span ╗
  //-     span ╝
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
  li.item.-big
    p.decoration
      span ╒
      span ╞
      span ╘
    p.text
      span it
      span what
      span it
    p.decoration
      span ╤
      span ╪
      span ╧
    p.text
      span is
      span ══
      span is
    p.decoration
      span ╕
      span ╡
      span ╛
  li.item.-big
    p.decoration
      span ╓
      span ╟
      span ╙
    p.text
      span Peace
      span with
      span a
    p.decoration
      span ╥
      span ╫
      span ╨
    p.text
      span begins
      span ───
      span smile
    p.decoration
      span ╖
      span ╢
      span ╜
  li.item.-big
    p.decoration
      span ╔
      span ╠
      span ╚
    p.text
      span Men
      span believe
      span they
    p.decoration
      span ╦
      span ╬
      span ╩
    p.text
      span willingly
      span what
      span wish
    p.decoration
      span ╗
      span ╣
      span ╝
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
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: 'Roboto';
    font-size: var(--ft-size-l);

    &.-big {
      grid-column: span 2;
    }

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
