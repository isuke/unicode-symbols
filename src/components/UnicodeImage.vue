<template lang="pug">
span.unicode-image(:style="style")
</template>

<script lang="coffee">
import image1 from "@/assets/unicode01_3.0.png"
import image2 from "@/assets/unicode02_3.0.png"

export default
  data: ->
    image1: image1
    image2: image2
    n: 128
    imageSize: 6779.07
  props:
    code:
      type: Number
      required: true
  computed:
    shapeSize: -> @imageSize / @n
    threshold: -> Math.pow(@n, 2)
    style: ->
      if @code < @threshold
        image    = @image1
        distance = @code
        pattarn  = "A"
      else
        image    = @image2
        distance = @code - @threshold
        pattarn  = "B"

      [x, y] = @d2xy @n, distance, pattarn
      {
        "background-image": "url(\"#{image}\")"
        "width": "#{Math.floor(@shapeSize)}px"
        "height": "#{Math.floor(@shapeSize)}px"
        "background-position-x": "-#{x * @shapeSize}px"
        "background-position-y": "-#{y * @shapeSize}px"
      }
  methods:
    d2xy: (n, d, pattarn) ->
      # Pattern A
      # ⊐⊏
      # ⊔⊔

      # Pattern B
      # ⊔⊐
      # ⊓⊐

      t = d
      s = 1
      x = 0
      y = 0

      while s < n
        [rx, ry] =
          if pattarn == "A"
            switch t % 4
              when 0 then [0, 0]
              when 1 then [0, 1]
              when 2 then [1, 1]
              when 3 then [1, 0]
          else
            switch t % 4
              when 0 then [0, 0]
              when 1 then [1, 0]
              when 2 then [1, 1]
              when 3 then [0, 1]

        [x, y] = @rotateFlip s, x, y, t
        x += s * rx
        y += s * ry
        t = Math.floor(t / 4)
        s *= 2

      [x, y]
    rotateFlip: (s, x, y, t) ->
      switch t % 4
        when 0
          # flip
          [y, x]
        when 1
          # no-op
          [x, y]
        when 2
          # no-op
          [x, y]
        when 3
          # rotate & flip
          x = s - 1 - x
          y = s - 1 - y
          [y, x]
</script>

<style lang="scss">
.unicode-image {
  content: "";
  display: inline-block;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
