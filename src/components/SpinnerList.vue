<template lang="pug">
ul.spinner-list
  //--- arrow ---//
  li.item: span.spinner ⤾
  li.item: span.spinner.-reverse ⤿

  //--- circle ---//
  li.item: span.spinner ◐
  //- li.item: span.spinner ◑ //- Point symmetry
  //- li.item: span.spinner ◒ //- Point symmetry
  //- li.item: span.spinner ◓ //- Point symmetry
  li.item: span.spinner ☯
  li.item: span.spinner.-mini ☹
  li.item: span.spinner.-mini ☺
  li.item: span.spinner.-mini ☻
  li.item: span.spinner.-mini ✆
  li.item: span.spinner.-mini ✇
  li.item: span.spinner.-mini ✪
  li.item: span.spinner.-mini ❂
  li.item: span.spinner ⴱ
  li.item: span.spinner ⴲ
  li.item: span.spinner ⵀ

  //--- circle and other ---//
  li.item: span.spinner ⵁ
  li.item: span.spinner ⵕ
  //- li.item: span.spinner ⵚ //- Point symmetry
  li.item: span.spinner ⌽
  li.item: span.spinner ⍉
  li.item: span.spinner ⏀
  li.item: span.spinner ⏁
  //- li.item: span.spinner ⏂ //- Point symmetry
  li.item: span.spinner ⍛
  li.item: span.spinner ⍜
  li.item: span.spinner ⍥
  li.item: span.spinner ❍
  li.item: span.spinner ⧬
  li.item: span.spinner ⧭
  li.item: span.spinner.-mini ◘
  li.item: span.spinner.-mini ⌕

  //--- gap ---//
  li.item: span.spinner.-mini ∘
  li.item: span.spinner ⴰ
  li.item: span.spinner 。
  //- li.item: span.spinner.-mini ⎉
  //- li.item: span.spinner.-mini ⎊
  //- li.item: span.spinner.-mini ☮

  //--- emoji ---//
  li.item: span.spinner ⏺
  li.item: span.spinner ⚽
  li.item: span.spinner ⚾
  li.item: span.spinner ⛔
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss">
.spinner-list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
  grid-auto-flow: row;
  grid-gap: var(--space-size-s);
  align-items: center;
  justify-content: center;
  text-align: center;

  > .item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: var(--unicode-font-family);
    font-size: var(--ft-size-l);
    white-space: nowrap;

    > .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      // width: 2rem;
      // height: 2rem;

      animation: spin 2s linear infinite;

      &.-reverse { animation: spin 2s linear infinite reverse; }

      &.-mini { font-size: var(--ft-size-xl); }
    }
  }
}

@keyframes spin {
  from { transform: rotate(  0deg) }
  to   { transform: rotate(360deg) }
}
</style>
