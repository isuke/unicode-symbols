<template lang="pug">
.unicode-list
  table.table
    thead.head
      tr.row
        th.head.image Image
        th.head.font Arial
        th.head.font Roboto
        th.head.name Name
        th.head.unicode Unicode Number
        th.head.htmlcode HTML Code
        th.head.csscode CSS Code
        th.head.block Block
        th.head.set Set
        th.head.version Unicode Version
    tbody.body
      tr.row(v-for="code in codes", :key="code")
        td.data.image: unicode-image.inner(:code="code")
        td.data.font.arial(v-html="`&#${code};`")
        td.data.font.roboto(v-html="`&#${code};`")
        td.data.name
          p.main {{ unicodeInfo(code).name }}
          p.sub(v-if="unicodeInfo(code).subNames.length > 0") {{ unicodeInfo(code).subNames.join(', ') }}
        td.data.code.unicode U+{{ code.toString(16) }}
        td.data.code.htmlcode
          p.code &amp;&#35;{{ code.toString(10) }};
          p.entity(v-if="unicodeInfo(code).entity") {{ unicodeInfo(code).entity }}
        td.data.code.csscode \{{ code.toString(16) }}
        td.data.block {{ unicodeInfo(code).block }}
        td.data.set {{ unicodeInfo(code).set ? unicodeInfo(code).set.join(', ') : "" }}
        td.data.version {{ unicodeInfo(code).version }}
</template>

<script lang="coffee">
import UnicodeImage from "@/components/UnicodeImage.vue"

import unicodeList from "@/unicode_list.json"

export default
  components:
    "unicode-image": UnicodeImage
  data: ->
    codes: [8192..11903].concat([12288..12351], [12800..13055], [13056..13311], [19904..19967])
    unicodeList: unicodeList
  methods:
    unicodeInfo: (code) -> @unicodeList[code.toString(10)]
</script>

<style lang="scss">
$global-bg-color-day: #f0f0f0;
$global-ft-color-day: #04041b;

.unicode-list {
  > .table {
    width: 100%;
    height: 100%;

    will-change: transform;

    > .head {
      > .row {
        > .head {
          position: sticky;
          background-color: darken($global-bg-color-day, 10%);
          min-width: 2.5rem;
          top: var(--global-header-height);
          padding: var(--space-size-m);

          z-index: calc(var(--base-z-index) + 1);
        }
      }
    }

    > .body {
      > .row {
        &:nth-child(odd)  { background-color:        $global-bg-color-day; }
        &:nth-child(even) { background-color: darken($global-bg-color-day, 5%); }

        > .data {
          padding: var(--space-size-m);

          &.image {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &.font {
            text-align: center;
            font-size: var(--ft-size-xl);

            &.arial  { font-family: 'Arial'; }
            &.roboto { font-family: 'Roboto'; }
          }

          &.name {
            > .main { /* no-op */ }
            > .sub {
              font-size: var(--ft-size-s);
              color: lighten($global-ft-color-day, 10%);
            }
          }

          &.code {
            font-family: var(--mono-font-family);
          }
        }
      }
    }
  }
}
</style>
