<template lang="pug">
.set-list
  template(v-for="(setList, title) in unicodeSetList")
    h2.subtitle {{ title }}
    table.content.table
      thead.head
        tr.row
          th.head.name Name
          th.head.code Code
          th.head(v-for="head in setList.head") {{ head }}
      tbody.body
        tr.row(v-for="set in setList.set", :key="set.name")
          th.head.name {{ set.name }}
          th.head.code {{ set.codes.join(', ') }}
          td.data.font(v-for="head in setList.head")
            span.inner {{ set.vals[head] }}
</template>

<script lang="coffee">
import unicodeSetList from "@/unicode_set_list.json"

export default
  data: ->
    unicodeSetList: unicodeSetList
</script>

<style lang="scss" scoped>
$global-bg-color-day: #f0f0f0;
$global-ft-color-day: #04041b;

.set-list {
  // padding: var(--space-size-s);

  > .title {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-l);
  }

  > .subtitle {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-m);
  }

  > .content {
    margin-bottom: var(--space-size-s);
  }

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
          padding: var(--space-size-s);

          z-index: calc(var(--base-z-index) + 1);
        }
      }
    }

    > .body {
      > .row {
        &:nth-child(odd)  { background-color:        $global-bg-color-day; }
        &:nth-child(even) { background-color: darken($global-bg-color-day, 5%); }

        >.head, >.data {
          padding: var(--space-size-s);
        }

        > .head {
          &.code {
            font-family: var(--mono-font-family);
            font-size: var(--ft-size-s);
          }
        }

        > .data {
          &.font {
            font-family: 'Roboto';
          }
        }
      }
    }
  }
}
</style>
