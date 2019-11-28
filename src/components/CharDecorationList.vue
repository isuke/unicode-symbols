<template lang="pug">
ul.char-decoration-list
  li.item
    span ⟰
    span A
    span ⟱
  li.item
    span ⴷ
    span A
    span ⴸ
  li.item
    span ⏜
    span A
    span ⏝
  li.item
    span ⌢
    span A
    span ⌣
  li.item
    span ⏞
    span A
    span ⏟
  li.item
    span ⏠
    span A
    span ⏡
  li.item
    span ⍊
    span A
    span ⍑
  li.item
    span ⩱
    span A
    span ⩲
  li.item
    span ⍋
    span A
    span ⍒
  li.item
    span ⍓
    span A
    span ⍌
  li.item
    span ⍎
    span A
    span ⍕
  li.item
    span ⍏
    span A
    span ⍖
  li.item
    span ⍐
    span A
    span ⍗
  li.item
    span ◠
    span A
    span ◡
  li.item
    span ⍲
    span A
    span ⍱
  li.item
    span ▲
    span A
    span ▼
  li.item
    span △
    span A
    span ▽
  li.item
    span ▴
    span A
    span ▾
  li.item
    span ▵
    span A
    span ▿
  li.item
    span ⩓
    span A
    span ⩔
  li.item
    span ⩕
    span A
    span ⩖
  li.item
    span ⩚
    span A
    span ⩛
  li.item
    span ⩜
    span A
    span ⩝
  li.item
    span ⩠
    span A
    span ⩢
  li.item
    span ◚
    span A
    span ◛
  li.item
    span ⨅
    span A
    span ⨆
  li.item
    span ⩎
    span A
    span ⩏
  li.item
    span ⨇
    span A
    span ⨈
  li.item
    span ⩄
    span A
    span ⩅
  li.item.-high
    span ⎴
    span A
    span ⎶
    span B
    span ⎵
  li.item.-high
    span ╦
    span A
    span ╬
    span B
    span ╩
  li.item.-high
    span ╥
    span A
    span ╫
    span B
    span ╨
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
.char-decoration-list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
  grid-auto-flow: row;
  grid-gap: var(--space-size-s);
  align-items: center;
  justify-content: center;
  text-align: center;

  > .item {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: var(--unicode-font-family);
    font-size: var(--ft-size-l);

    &.-high { grid-row: span 2; }
  }
}
</style>
