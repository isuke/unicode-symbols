<template lang="pug">
ul.form-list
  li.item
    input.input.checkbox01(id="checkbox01-1", type="checkbox", checked)
    label.label(for="checkbox01-1")
    input.input.checkbox01(id="checkbox01-2", type="checkbox")
    label.label(for="checkbox01-2")
    input.input.checkbox01(id="checkbox01-3", type="checkbox", disabled)
    label.label(for="checkbox01-3")
  li.item
    input.input.checkbox02(id="checkbox02-1", type="checkbox", checked)
    label.label(for="checkbox02-1")
    input.input.checkbox02(id="checkbox02-2", type="checkbox")
    label.label(for="checkbox02-2")
    input.input.checkbox02(id="checkbox02-3", type="checkbox")
    label.label(for="checkbox02-3")
  li.item
    input.input.checkbox03(id="checkbox03-1", type="checkbox", checked)
    label.label(for="checkbox03-1")
    input.input.checkbox03(id="checkbox03-2", type="checkbox")
    label.label(for="checkbox03-2")
    input.input.checkbox03(id="checkbox03-3", type="checkbox")
    label.label(for="checkbox03-3")
  li.item
    input.input.checkbox04(id="checkbox04-1", type="checkbox", checked)
    label.label(for="checkbox04-1")
    input.input.checkbox04(id="checkbox04-2", type="checkbox")
    label.label(for="checkbox04-2")
    input.input.checkbox04(id="checkbox04-3", type="checkbox")
    label.label(for="checkbox04-3")
  li.item
    input.input.checkbox05(id="checkbox05-1", type="checkbox", checked)
    label.label(for="checkbox05-1")
    input.input.checkbox05(id="checkbox05-2", type="checkbox")
    label.label(for="checkbox05-2")
    input.input.checkbox05(id="checkbox05-3", type="checkbox")
    label.label(for="checkbox05-3")

  li.item
    input.input.radio01(id="radio01-1", type="radio", name="radio01", checked)
    label.label(for="radio01-1")
    input.input.radio01(id="radio01-2", type="radio", name="radio01")
    label.label(for="radio01-2")
    input.input.radio01(id="radio01-3", type="radio", name="radio01", disabled)
    label.label(for="radio01-3")
  li.item
    input.input.radio02(id="radio02-1", type="radio", name="radio02", checked)
    label.label(for="radio02-1")
    input.input.radio02(id="radio02-2", type="radio", name="radio02")
    label.label(for="radio02-2")
    input.input.radio02(id="radio02-3", type="radio", name="radio02", disabled)
    label.label(for="radio02-3")
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss">
.form-list {
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    font-family: var(--unicode-font-family);
    font-size: var(--ft-size-l);
    white-space: nowrap;


    > .input {
      display: none;
    }
    > .label {
      &:before {
        font-family: var(--unicode-font-family);
        font-size: var(--ft-size-xl);
      }
    }

    > .checkbox01[type=checkbox] {
      &:not(:checked) + .label:before { content: '☐'; }
      &:checked       + .label:before { content: '☑'; }
      &:disabled      + .label:before { content: '☒'; }
    }
    > .checkbox02[type=checkbox] {
      &:not(:checked) + .label:before { content: '☹'; }
      &:checked       + .label:before { content: '☺'; }
    }
    > .checkbox03[type=checkbox] {
      &:not(:checked) + .label:before { content: '☆'; }
      &:checked       + .label:before { content: '★'; }
    }
    > .checkbox04[type=checkbox] {
      &:not(:checked) + .label:before { content: '⚐'; }
      &:checked       + .label:before { content: '⚑'; }
    }
    > .checkbox05[type=checkbox] {
      &:not(:checked) + .label:before { content: '⫗'; }
      &:checked       + .label:before { content: '⫘'; }
    }
    > .checkbox05[type=checkbox] {
      &:not(:checked) + .label:before { content: '⫰'; }
      &:checked       + .label:before { content: '⫯'; }
    }

    .radio01[type=radio] {
      display: none;
      &:not(:checked) + .label:before { content: '◎'; }
      &:checked       + .label:before { content: '◉'; }
      &:disabled      + .label:before { content: '◌'; }

    }
    .radio02[type=radio] {
      display: none;
      &:not(:checked) + .label:before { content: '⦾'; }
      &:checked       + .label:before { content: '⦿'; }
      &:disabled      + .label:before { content: '⦻'; }
    }
  }
}
</style>
