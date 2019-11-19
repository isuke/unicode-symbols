<template lang="pug">
.sample-list
  h2.subtitle Decoration
  title-decoration-list.content
  logo-decoration-list.content
  text-decoration-list.content
  char-decoration-list.content

  h2.subtitle Spinner
  spinner-list.content

  //- h2.subtitle Loading
  //- ul.content.list
  //-   li.item

  //- h2.subtitle Form
  //- ul.list
  //-   li.item
  //-     .hoge
  //-       label hoge ☐ ☑
  //-         input(type="checkbox")
  //-     .code
  //-       | TODO
  //-   li.item
  //-     .hoge
  //-       label hoge
  //-         input(type="radio")
  //-     .code
  //-       | TODO
  //-   li.item
  //-     .hoge
  //-       label ⴷ ⴸ
  //-         select
  //-     .code
  //-       | TODO
</template>

<script lang="coffee">
import TitleDecorationList from "@/components/TitleDecorationList.vue"
import LogoDecorationList  from "@/components/LogoDecorationList.vue"
import TextDecorationList  from "@/components/TextDecorationList.vue"
import CharDecorationList  from "@/components/CharDecorationList.vue"
import SpinnerList         from "@/components/SpinnerList.vue"

export default
  components:
    "title-decoration-list": TitleDecorationList
    "logo-decoration-list": LogoDecorationList
    "text-decoration-list": TextDecorationList
    "char-decoration-list": CharDecorationList
    "spinner-list": SpinnerList
</script>

<style lang="scss" scoped>
.sample-list {
  padding: var(--space-size-s);

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
}
</style>
