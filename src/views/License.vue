<template lang="pug">
.license
  h1.title License

  h2.subtitle Unicode Image
  .unicodemap
    h3.title: a.link(href="https://github.com/hakatashi/unicode-map") The Unicode Map Project ver3.0.0
    dl.list
      dt.term author
      dd.description hakatashi (Koki Takahashi)
      dt.term license
      dd.description: a.link(href="https://www.gnu.org/licenses/gpl-3.0.txt") GPLv3

  h2.subtitle Other Materials
  .materials
    .material
      h3.title: a.link(href="https://commons.wikimedia.org/wiki/File:ArmenianEternity.svg") ArmenianEternity.svg
      dl.list
        dt.term author
        dd.description AnonMoos
        dt.term license
        dd.description Public Domain
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-NGA.png") SYRIAC-LETTER-MALAYALAM-NGA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-JA.png") SYRIAC-LETTER-MALAYALAM-JA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-NYA.png") SYRIAC-LETTER-MALAYALAM-NYA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-TTA.png") SYRIAC-LETTER-MALAYALAM-TTA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-NNA.png") SYRIAC-LETTER-MALAYALAM-NNA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-NNNA.png") SYRIAC-LETTER-MALAYALAM-NNNA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-BHA.png") SYRIAC-LETTER-MALAYALAM-BHA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-RA.png") SYRIAC-LETTER-MALAYALAM-RA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-LLA.png") SYRIAC-LETTER-MALAYALAM-LLA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-LLLA.png") SYRIAC-LETTER-MALAYALAM-LLLA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://en.wikipedia.org/wiki/File:SYRIAC-LETTER-MALAYALAM-SSA.png") SYRIAC-LETTER-MALAYALAM-SSA.png
      dl.list
        dt.term author
        dd.description Raamesh
        dt.term license
        dd.description CC BY-SA 4.0
    .material
      h3.title: a.link(href="https://commons.wikimedia.org/wiki/File:%D0%90%D1%81%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D1%96_%D1%86%D0%B8%D1%84%D1%80%D0%B8_%D1%81%D0%B8%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0._Sinhalese_astrological_numerals_(Sinhala_Lith_Illakkam).png") Астрологічні цифри сингальського письма. Sinhalese astrological numerals (Sinhala Lith Illakkam).png
      dl.list
        dt.term author
        dd.description 00 وديع
        dt.term license
        dd.description CC0 1.0
    .material
      h3.title: a.link(href="http://www.opensans.com/") Open Sans
      dl.list
        dt.term author
        dd.description Steve Matteson and Google Corporation
        dt.term license
        dd.description Apache License v2
    .material
      h3.title: a.link(href="http://www.linuxlibertine.org/") Linux Libertine
      dl.list
        dt.term author
        dd.description Libertine Open Fonts Project and Philipp H. Poll
        dt.term license
        dd.description SIL OFL 1.1
    .material
      h3.title: a.link(href="http://ndiscovered.com/cinzel/") Cinzel
      dl.list
        dt.term author
        dd.description Natanael Gama
        dt.term license
        dd.description SIL OFL 1.1
</template>

<script lang="coffee">
export default {}
</script>

<style lang="scss" scoped>
.license {
  padding: var(--space-size-s);

  > .title {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-l);
  }

  > .subtitle {
    font-size: var(--ft-size-l);
    margin-bottom: var(--space-size-m);
  }

  > .unicodemap {
    background-color: #f0f0f0;
    padding: var(--space-size-s);
    margin-bottom: var(--space-size-l);

    > .title {
      margin-bottom: var(--space-size-s);
    }
    > .list {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-gap: var(--space-size-s);

      > .term {}
      > .description {}
    }
  }

  > .materials {
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-flow: row;
    grid-gap: var(--space-size-l) var(--space-size-s);

    > .material {
      background-color: #f0f0f0;
      padding: var(--space-size-s);

      > .title {
        margin-bottom: var(--space-size-s);
      }
      > .list {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: var(--space-size-s);

        > .term {}
        > .description {}
      }
    }
  }
}
</style>
