<template lang="pug">
.hexagram-getter
    form.form
      input.checkbox(type="checkbox", v-model="bit6")
      input.checkbox(type="checkbox", v-model="bit5")
      input.checkbox(type="checkbox", v-model="bit4")
      input.checkbox(type="checkbox", v-model="bit3")
      input.checkbox(type="checkbox", v-model="bit2")
      input.checkbox(type="checkbox", v-model="bit1")
    .char {{ hexagram.char }}
    .code U+{{ hexagram.code.toString(16) }}
</template>

<script lang="coffee">
export default
  data: ->
    hexagrams:
      "111111": { char: "䷀", code: 19904 }
      "000000": { char: "䷁", code: 19905 }
      "010001": { char: "䷂", code: 19906 }
      "100010": { char: "䷃", code: 19907 }
      "010111": { char: "䷄", code: 19908 }
      "111010": { char: "䷅", code: 19909 }
      "000010": { char: "䷆", code: 19910 }
      "010000": { char: "䷇", code: 19911 }
      "110111": { char: "䷈", code: 19912 }
      "111011": { char: "䷉", code: 19913 }
      "000111": { char: "䷊", code: 19914 }
      "111000": { char: "䷋", code: 19915 }
      "111101": { char: "䷌", code: 19916 }
      "101111": { char: "䷍", code: 19917 }
      "000100": { char: "䷎", code: 19918 }
      "001000": { char: "䷏", code: 19919 }
      "011001": { char: "䷐", code: 19920 }
      "100110": { char: "䷑", code: 19921 }
      "000011": { char: "䷒", code: 19922 }
      "110000": { char: "䷓", code: 19923 }
      "101001": { char: "䷔", code: 19924 }
      "100101": { char: "䷕", code: 19925 }
      "100000": { char: "䷖", code: 19926 }
      "000001": { char: "䷗", code: 19927 }
      "111001": { char: "䷘", code: 19928 }
      "100111": { char: "䷙", code: 19929 }
      "100001": { char: "䷚", code: 19930 }
      "011110": { char: "䷛", code: 19931 }
      "010010": { char: "䷜", code: 19932 }
      "101101": { char: "䷝", code: 19933 }
      "011100": { char: "䷞", code: 19934 }
      "001110": { char: "䷟", code: 19935 }
      "111100": { char: "䷠", code: 19936 }
      "001111": { char: "䷡", code: 19937 }
      "101000": { char: "䷢", code: 19938 }
      "000101": { char: "䷣", code: 19939 }
      "110101": { char: "䷤", code: 19940 }
      "101011": { char: "䷥", code: 19941 }
      "010100": { char: "䷦", code: 19942 }
      "001010": { char: "䷧", code: 19943 }
      "100011": { char: "䷨", code: 19944 }
      "110001": { char: "䷩", code: 19945 }
      "011111": { char: "䷪", code: 19946 }
      "111110": { char: "䷫", code: 19947 }
      "011000": { char: "䷬", code: 19948 }
      "000110": { char: "䷭", code: 19949 }
      "011010": { char: "䷮", code: 19950 }
      "010110": { char: "䷯", code: 19951 }
      "011101": { char: "䷰", code: 19952 }
      "101110": { char: "䷱", code: 19953 }
      "001001": { char: "䷲", code: 19954 }
      "100100": { char: "䷳", code: 19955 }
      "110100": { char: "䷴", code: 19956 }
      "001011": { char: "䷵", code: 19957 }
      "001101": { char: "䷶", code: 19958 }
      "101100": { char: "䷷", code: 19959 }
      "110110": { char: "䷸", code: 19960 }
      "011011": { char: "䷹", code: 19961 }
      "110010": { char: "䷺", code: 19962 }
      "010011": { char: "䷻", code: 19963 }
      "110011": { char: "䷼", code: 19964 }
      "001100": { char: "䷽", code: 19965 }
      "010101": { char: "䷾", code: 19966 }
      "101010": { char: "䷿", code: 19967 }
    bit1: true
    bit2: true
    bit3: true
    bit4: true
    bit5: true
    bit6: true
  computed:
    bit: ->
      num = 0
      num +=   1 if @bit1
      num +=   2 if @bit2
      num +=   4 if @bit3
      num +=   8 if @bit4
      num +=  16 if @bit5
      num +=  32 if @bit6
      ("000000" + Number(num).toString(2)).slice(-6)
    hexagram: ->
      @hexagrams[@bit]
</script>

<style lang="scss" scoped>
.hexagram-getter {
  display: flex;
  flex-direction: row;
  align-items: center;

  > .form {
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: min-content;
    grid-auto-flow: column;
    grid-gap: calc(var(--space-size-s) / 2);
    margin-right: var(--space-size-m);
  }
  > .char {
    display: flex;
    align-items: center;
    justify-content: center;
    // height: calc(100% + 0.6rem);
    margin-top: -0.6rem;
    font-size: 7.6rem;
    font-family: 'Roboto';
    overflow: hidden;
    margin-right: var(--space-size-m);
  }
  > .code {
    font-family: var(--mono-font-family);
  }
}
</style>
