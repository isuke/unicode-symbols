<template lang="pug">
ul.animation-list
  li.item(v-for="(animation, index) in animations", :key="index", :class="{ '-wide': animation.wide }")
    step-animation.ani(:strs="animation.strs")
</template>

<script lang="coffee">
import StepAnimation from "@/components/StepAnimation.vue"

export default
  components:
    "step-animation": StepAnimation
  data: ->
    animations: [
      { wide: false, strs: ["", "▏", "▎", "▍", "▌", "▋", "▊", "▉"] }
      { wide: false, strs: ["", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"] }
      { wide: false, strs: ["╀", "┾", "╁", "┽"] }
      { wide: false, strs: ["▸▹▹▹", "▹▸▹▹", "▹▹▸▹", "▹▹▹▸"] }
      { wide: false, strs: ["☰", "☱", "☲", "☴"] }
      { wide: false, strs: ["䷀", "䷪", "䷍", "䷈", "䷉", "䷌", "䷫"] }
      { wide: false, strs: ["䷛", "䷍", "䷈", "䷉", "䷌"] }
      { wide: false, strs: ["⠁","⠈","⠐","⠂","⠄","⠠","⢀","⡀"] }
      { wide: false, strs: ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"] }
      { wide: false, strs: ["⠃","⠆","⡄","⣀","⢠","⠰","⠘","⠉"] }
      { wide: false, strs: ["⠇","⡆","⣄","⣠","⢰","⠸","⠙","⠋"] }
      { wide: false, strs: ["⠙","⠚","⠖","⠦","⢤","⣠","⣄","⡤","⠴","⠲","⠓","⠋"] }
      { wide: false, strs: ["⠁", "⠈", "⠐", "⠂", "⠄", "⠠", "⢀", "⡀", "⡁", "⡈", "⡐", "⡂", "⡄", "⡠", "⣀", "⣁", "⣈", "⣐", "⣂", "⣄", "⣠", "⣡", "⣨", "⣰", "⣢", "⣤", "⣥", "⣬", "⣴", "⣦", "⣧", "⣮", "⣶", "⣷", "⣾", "⣿"] }
      { wide: false, strs: ["⠉⠉⠀", "⠈⠉⠁", "⠀⠉⠉", "⠀⠈⠙", "⠀⠀⠛", "⠀⠐⠚", "⠀⠒⠒", "⠐⠒⠂", "⠒⠒⠀", "⠖⠂⠀", "⠶⠀⠀", "⠦⠄⠀", "⠤⠤⠀", "⠠⠤⠄", "⠀⠤⠤", "⠀⠠⢤", "⠀⠀⣤", "⠀⢀⣠", "⠀⣀⣀", "⢀⣀⡀", "⣀⣀⠀"] }
      { wide: true , strs: ["⡇⠀⠀⠀", "⢸⠀⠀⠀", "⠀⡇⠀⠀", "⠀⢸⠀⠀", "⠀⠀⡇⠀", "⠀⠀⢸⠀", "⠀⠀⠀⡇", "⠀⠀⠀⢸", "⡇⠀⠀⢸", "⢸⠀⠀⢸", "⠀⡇⠀⢸", "⠀⢸⠀⢸", "⠀⠀⡇⢸", "⠀⠀⢸⢸", "⠀⠀⠀⣿", "⡇⠀⠀⣿", "⢸⠀⠀⣿", "⠀⡇⠀⣿", "⠀⢸⠀⣿", "⠀⠀⡇⣿", "⠀⠀⢸⣿", "⡇⠀⢸⣿", "⢸⠀⢸⣿", "⠀⡇⢸⣿", "⠀⢸⢸⣿", "⠀⠀⣿⣿", "⡇⠀⣿⣿", "⢸⠀⣿⣿", "⠀⡇⣿⣿", "⠀⢸⣿⣿", "⡇⢸⣿⣿", "⢸⢸⣿⣿", "⠀⣿⣿⣿", "⡇⣿⣿⣿", "⢸⣿⣿⣿", "⣿⣿⣿⣿"] }
      { wide: true , strs: ["⎛　　⬮　　　⬮⎞", "⎛　⬮　　　⬮　⎞", "⎛⬮　　　⬮　　⎞", "⎛　⬮　　　⬮　⎞"] }
    ]
</script>

<style lang="scss">
.animation-list {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(3.5rem, 1fr));
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
    font-family: 'Roboto';
    font-size: var(--ft-size-l);
    white-space: nowrap;

    &.-wide { grid-column: span 2; }

    > .ani { letter-spacing: -0.2em; }
  }
}
</style>
