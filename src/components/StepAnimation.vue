<template lang="pug">
span.step-animation {{ content }}
</template>

<script lang="coffee">
export default
  props:
    strs:
      type: Array
      required: true
    duration:
      type: Number
      required: false
      default: 0.2
    # alternate:
    #   type: Boolean
    #   required: false
    #   default: false
  computed:
    size: -> @strs.length
  data: ->
    intervalId: undefined
    content: ""
  mounted: ->
    i = 0
    @intervalId = setInterval =>
      i = 0 if @size <= i

      @content = @strs[i]
      i++
    , @duration * 1000
  beforeDestroy: ->
    clearInterval(@intervalId)
</script>

<style lang="scss">
.step-animation {
  /* no-op */
}
</style>
