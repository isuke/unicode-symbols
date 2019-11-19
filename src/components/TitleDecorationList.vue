<template lang="pug">
ul.title-decoration-list
  li.item ❨ Title ❩
  li.item ❪ Title ❫
  li.item ❬ Title ❭
  li.item ❮ Title ❯
  li.item ❰ Title ❱
  li.item ❲ Title ❳
  li.item ❴ Title ❵
  li.item ⟦ Title ⟧
  li.item ⟨ Title ⟩
  li.item ⟪ Title ⟫
  li.item ⟬ Title ⟭
  li.item ⟮ Title ⟯
  li.item ⦃ Title ⦄
  li.item ⦅ Title ⦆
  li.item ⦇ Title ⦈
  li.item ⦉ Title ⦊
  li.item ⦋ Title ⦌
  li.item ⦍ Title ⦐
  li.item ⦏ Title ⦎
  li.item ⦑ Title ⦒
  li.item ⦓ Title ⦔
  li.item ⦕ Title ⦖
  li.item ⦗ Title ⦘
  li.item ⦤ Title ⦥
  li.item ⪡ Title ⪢
  li.item ⪪ Title ⪫
  li.item ⪻ Title ⪼
  li.item ⧏ Title ⧐
  li.item ⩤ Title ⩥
  li.item ⩹ Title ⩺
  li.item ⪽ Title ⪾
  li.item ⫏ Title ⫐
  li.item ◖ Title ◗
  li.item ☾ Title ☽
  li.item ⫷ Title ⫸
  li.item ⭅ Title ⭆
  li.item ◀ Title ▶
  li.item ◁ Title ▷
  li.item ◂ Title ▸
  li.item ◃ Title ▹
  li.item ◄ Title ►
  li.item ◅ Title ▻
  li.item ⴹ Title ⴺ
  li.item ⁅ Title ⁆
  li.item ⸦ Title ⸧
  li.item ⸨ Title ⸩
  li.item 〈 Title 〉
  li.item 《 Title 》
  li.item 「 Title 」
  li.item 『 Title 』
  li.item 【 Title 】
  li.item 〔 Title 〕
  li.item 〖 Title 〗
  li.item 〘 Title 〙
  li.item 〚 Title 〛
  li.item ⸐ Title ⸑
  li.item ⸠ Title ⸡
  li.item ╞ Title ╡
  li.item ╠ Title ╣
  li.item ╟ Title ╢
  li.item 〈 Title 〉
  li.item ⍃ Title ⍄
  li.item ⍅ Title ⍆
  li.item ⍈ Title ⍇
  li.item ☛ Title ☚
  li.item ☞ Title ☜
  li.item.-wide ╞ Title ╪ Title ╡
  li.item.-wide ╟ Title ╫ Title ╢
  li.item.-wide ╠ Title ╬ Title ╣
  li.item.-wide ⢸ Title ⣿ Title ⡇
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
.title-decoration-list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
  grid-auto-flow: row;
  grid-gap: var(--space-size-s);
  align-items: center;
  justify-content: center;
  text-align: center;

  > .item {
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: 'Roboto';
    font-size: var(--ft-size-l);
    white-space: nowrap;

    &.-wide { grid-column: span 2; }
  }
}
</style>
