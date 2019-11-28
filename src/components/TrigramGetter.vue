<template lang="pug">
.trigram-getter
  form.form
    input.input(:id="`${_uid}-bit3`", type="checkbox", v-model="bit3")
    label.label(:for="`${_uid}-bit3`")
    input.input(:id="`${_uid}-bit2`", type="checkbox", v-model="bit2")
    label.label(:for="`${_uid}-bit2`")
    input.input(:id="`${_uid}-bit1`", type="checkbox", v-model="bit1")
    label.label(:for="`${_uid}-bit1`")
  .char {{ trigram.char }}
  .code U+{{ trigram.code.toString(16) }}
</template>

<script lang="coffee">
export default
  data: ->
    trigrams:
      "111": { char: "☰", code: 9776 }
      "011": { char: "☱", code: 9777 }
      "101": { char: "☲", code: 9778 }
      "001": { char: "☳", code: 9779 }
      "110": { char: "☴", code: 9780 }
      "010": { char: "☵", code: 9781 }
      "100": { char: "☶", code: 9782 }
      "000": { char: "☷", code: 9783 }
    bit1: true
    bit2: true
    bit3: true
  computed:
    bit: ->
      num = 0
      num +=   1 if @bit1
      num +=   2 if @bit2
      num +=   4 if @bit3
      ("000" + Number(num).toString(2)).slice(-3)
    trigram: ->
      @trigrams[@bit]
</script>

<style lang="scss" scoped>
.trigram-getter {
  display: flex;
  flex-direction: row;
  align-items: center;

  > .form {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: min-content;
    grid-auto-flow: column;
    grid-gap: 1px;
    align-items: center;
    justify-content: center;
    margin-right: var(--space-size-m);

    > .input {
      display: none;
      &:not(:checked) + .label:before { content: '☐'; }
      &:checked       + .label:before { content: '☑'; }
    }
    > .label {
      &:before {
        font-family: 'Roboto-Regular';
        font-size: var(--ft-size-l);
      }
    }
  }
  > .char {
    display: flex;
    align-items: center;
    justify-content: center;
    // height: calc(100% + 0.4rem);
    margin-top: -0.4rem;
    font-size: 5.8rem;
    font-family: 'Roboto-Regular';
    overflow: hidden;
    margin-right: var(--space-size-m);
  }
  > .code {
    font-family: var(--mono-font-family);
  }
}
</style>
