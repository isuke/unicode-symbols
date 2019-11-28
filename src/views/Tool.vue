<template lang="pug">
.tool
  h1.title Tools

  h2.subtitle Braille Getter
  braille-getter.content

  h2.subtitle Trigram Getter
  trigram-getter.content

  h2.subtitle Hexagram Getter
  hexagram-getter.content
</template>

<script lang="coffee">
import BrailleGetter  from "@/components/BrailleGetter.vue"
import TrigramGetter  from "@/components/TrigramGetter.vue"
import HexagramGetter from "@/components/HexagramGetter.vue"

export default
  components:
    "braille-getter": BrailleGetter
    "trigram-getter": TrigramGetter
    "hexagram-getter": HexagramGetter
</script>

<style lang="scss" scoped>
.tool {
  padding: var(--space-size-s);
  margin-bottom: var(--space-size-xxl);

  > .title {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-l);
  }

  > .subtitle {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-m);
  }

  > .content {
    margin-bottom: var(--space-size-l);
  }
}
</style>
