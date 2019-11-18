<template lang="pug">
.braille-getter
    form.form
      input.checkbox(type="checkbox", v-model="bit1")
      input.checkbox(type="checkbox", v-model="bit2")
      input.checkbox(type="checkbox", v-model="bit3")
      input.checkbox(type="checkbox", v-model="bit4")
      input.checkbox(type="checkbox", v-model="bit5")
      input.checkbox(type="checkbox", v-model="bit6")
      input.checkbox(type="checkbox", v-model="bit7")
      input.checkbox(type="checkbox", v-model="bit8")
    .char {{ baraille.char }}
    .code U+{{ baraille.code.toString(16) }}
</template>

<script lang="coffee">
export default
  data: ->
    barailles:
      "00000000": { char: "⠀", code: 10240 }
      "00000001": { char: "⠁", code: 10241 }
      "00000010": { char: "⠂", code: 10242 }
      "00000011": { char: "⠃", code: 10243 }
      "00000100": { char: "⠄", code: 10244 }
      "00000101": { char: "⠅", code: 10245 }
      "00000110": { char: "⠆", code: 10246 }
      "00000111": { char: "⠇", code: 10247 }
      "00010000": { char: "⠈", code: 10248 }
      "00010001": { char: "⠉", code: 10249 }
      "00010010": { char: "⠊", code: 10250 }
      "00010011": { char: "⠋", code: 10251 }
      "00010100": { char: "⠌", code: 10252 }
      "00010101": { char: "⠍", code: 10253 }
      "00010110": { char: "⠎", code: 10254 }
      "00010111": { char: "⠏", code: 10255 }
      "00100000": { char: "⠐", code: 10256 }
      "00100001": { char: "⠑", code: 10257 }
      "00100010": { char: "⠒", code: 10258 }
      "00100011": { char: "⠓", code: 10259 }
      "00100100": { char: "⠔", code: 10260 }
      "00100101": { char: "⠕", code: 10261 }
      "00100110": { char: "⠖", code: 10262 }
      "00100111": { char: "⠗", code: 10263 }
      "00110000": { char: "⠘", code: 10264 }
      "00110001": { char: "⠙", code: 10265 }
      "00110010": { char: "⠚", code: 10266 }
      "00110011": { char: "⠛", code: 10267 }
      "00110100": { char: "⠜", code: 10268 }
      "00110101": { char: "⠝", code: 10269 }
      "00110110": { char: "⠞", code: 10270 }
      "00110111": { char: "⠟", code: 10271 }
      "01000000": { char: "⠠", code: 10272 }
      "01000001": { char: "⠡", code: 10273 }
      "01000010": { char: "⠢", code: 10274 }
      "01000011": { char: "⠣", code: 10275 }
      "01000100": { char: "⠤", code: 10276 }
      "01000101": { char: "⠥", code: 10277 }
      "01000110": { char: "⠦", code: 10278 }
      "01000111": { char: "⠧", code: 10279 }
      "01010000": { char: "⠨", code: 10280 }
      "01010001": { char: "⠩", code: 10281 }
      "01010010": { char: "⠪", code: 10282 }
      "01010011": { char: "⠫", code: 10283 }
      "01010100": { char: "⠬", code: 10284 }
      "01010101": { char: "⠭", code: 10285 }
      "01010110": { char: "⠮", code: 10286 }
      "01010111": { char: "⠯", code: 10287 }
      "01100000": { char: "⠰", code: 10288 }
      "01100001": { char: "⠱", code: 10289 }
      "01100010": { char: "⠲", code: 10290 }
      "01100011": { char: "⠳", code: 10291 }
      "01100100": { char: "⠴", code: 10292 }
      "01100101": { char: "⠵", code: 10293 }
      "01100110": { char: "⠶", code: 10294 }
      "01100111": { char: "⠷", code: 10295 }
      "01110000": { char: "⠸", code: 10296 }
      "01110001": { char: "⠹", code: 10297 }
      "01110010": { char: "⠺", code: 10298 }
      "01110011": { char: "⠻", code: 10299 }
      "01110100": { char: "⠼", code: 10300 }
      "01110101": { char: "⠽", code: 10301 }
      "01110110": { char: "⠾", code: 10302 }
      "01110111": { char: "⠿", code: 10303 }
      "00001000": { char: "⡀", code: 10304 }
      "00001001": { char: "⡁", code: 10305 }
      "00001010": { char: "⡂", code: 10306 }
      "00001011": { char: "⡃", code: 10307 }
      "00001100": { char: "⡄", code: 10308 }
      "00001101": { char: "⡅", code: 10309 }
      "00001110": { char: "⡆", code: 10310 }
      "00001111": { char: "⡇", code: 10311 }
      "00011000": { char: "⡈", code: 10312 }
      "00011001": { char: "⡉", code: 10313 }
      "00011010": { char: "⡊", code: 10314 }
      "00011011": { char: "⡋", code: 10315 }
      "00011100": { char: "⡌", code: 10316 }
      "00011101": { char: "⡍", code: 10317 }
      "00011110": { char: "⡎", code: 10318 }
      "00011111": { char: "⡏", code: 10319 }
      "00101000": { char: "⡐", code: 10320 }
      "00101001": { char: "⡑", code: 10321 }
      "00101010": { char: "⡒", code: 10322 }
      "00101011": { char: "⡓", code: 10323 }
      "00101100": { char: "⡔", code: 10324 }
      "00101101": { char: "⡕", code: 10325 }
      "00101110": { char: "⡖", code: 10326 }
      "00101111": { char: "⡗", code: 10327 }
      "00111000": { char: "⡘", code: 10328 }
      "00111001": { char: "⡙", code: 10329 }
      "00111010": { char: "⡚", code: 10330 }
      "00111011": { char: "⡛", code: 10331 }
      "00111100": { char: "⡜", code: 10332 }
      "00111101": { char: "⡝", code: 10333 }
      "00111110": { char: "⡞", code: 10334 }
      "00111111": { char: "⡟", code: 10335 }
      "01001000": { char: "⡠", code: 10336 }
      "01001001": { char: "⡡", code: 10337 }
      "01001010": { char: "⡢", code: 10338 }
      "01001011": { char: "⡣", code: 10339 }
      "01001100": { char: "⡤", code: 10340 }
      "01001101": { char: "⡥", code: 10341 }
      "01001110": { char: "⡦", code: 10342 }
      "01001111": { char: "⡧", code: 10343 }
      "01011000": { char: "⡨", code: 10344 }
      "01011001": { char: "⡩", code: 10345 }
      "01011010": { char: "⡪", code: 10346 }
      "01011011": { char: "⡫", code: 10347 }
      "01011100": { char: "⡬", code: 10348 }
      "01011101": { char: "⡭", code: 10349 }
      "01011110": { char: "⡮", code: 10350 }
      "01011111": { char: "⡯", code: 10351 }
      "01101000": { char: "⡰", code: 10352 }
      "01101001": { char: "⡱", code: 10353 }
      "01101010": { char: "⡲", code: 10354 }
      "01101011": { char: "⡳", code: 10355 }
      "01101100": { char: "⡴", code: 10356 }
      "01101101": { char: "⡵", code: 10357 }
      "01101110": { char: "⡶", code: 10358 }
      "01101111": { char: "⡷", code: 10359 }
      "01111000": { char: "⡸", code: 10360 }
      "01111001": { char: "⡹", code: 10361 }
      "01111010": { char: "⡺", code: 10362 }
      "01111011": { char: "⡻", code: 10363 }
      "01111100": { char: "⡼", code: 10364 }
      "01111101": { char: "⡽", code: 10365 }
      "01111110": { char: "⡾", code: 10366 }
      "01111111": { char: "⡿", code: 10367 }
      "10000000": { char: "⢀", code: 10368 }
      "10000001": { char: "⢁", code: 10369 }
      "10000010": { char: "⢂", code: 10370 }
      "10000011": { char: "⢃", code: 10371 }
      "10000100": { char: "⢄", code: 10372 }
      "10000101": { char: "⢅", code: 10373 }
      "10000110": { char: "⢆", code: 10374 }
      "10000111": { char: "⢇", code: 10375 }
      "10010000": { char: "⢈", code: 10376 }
      "10010001": { char: "⢉", code: 10377 }
      "10010010": { char: "⢊", code: 10378 }
      "10010011": { char: "⢋", code: 10379 }
      "10010100": { char: "⢌", code: 10380 }
      "10010101": { char: "⢍", code: 10381 }
      "10010110": { char: "⢎", code: 10382 }
      "10010111": { char: "⢏", code: 10383 }
      "10100000": { char: "⢐", code: 10384 }
      "10100001": { char: "⢑", code: 10385 }
      "10100010": { char: "⢒", code: 10386 }
      "10100011": { char: "⢓", code: 10387 }
      "10100100": { char: "⢔", code: 10388 }
      "10100101": { char: "⢕", code: 10389 }
      "10100110": { char: "⢖", code: 10390 }
      "10100111": { char: "⢗", code: 10391 }
      "10110000": { char: "⢘", code: 10392 }
      "10110001": { char: "⢙", code: 10393 }
      "10110010": { char: "⢚", code: 10394 }
      "10110011": { char: "⢛", code: 10395 }
      "10110100": { char: "⢜", code: 10396 }
      "10110101": { char: "⢝", code: 10397 }
      "10110110": { char: "⢞", code: 10398 }
      "10110111": { char: "⢟", code: 10399 }
      "11000000": { char: "⢠", code: 10400 }
      "11000001": { char: "⢡", code: 10401 }
      "11000010": { char: "⢢", code: 10402 }
      "11000011": { char: "⢣", code: 10403 }
      "11000100": { char: "⢤", code: 10404 }
      "11000101": { char: "⢥", code: 10405 }
      "11000110": { char: "⢦", code: 10406 }
      "11000111": { char: "⢧", code: 10407 }
      "11010000": { char: "⢨", code: 10408 }
      "11010001": { char: "⢩", code: 10409 }
      "11010010": { char: "⢪", code: 10410 }
      "11010011": { char: "⢫", code: 10411 }
      "11010100": { char: "⢬", code: 10412 }
      "11010101": { char: "⢭", code: 10413 }
      "11010110": { char: "⢮", code: 10414 }
      "11010111": { char: "⢯", code: 10415 }
      "11100000": { char: "⢰", code: 10416 }
      "11100001": { char: "⢱", code: 10417 }
      "11100010": { char: "⢲", code: 10418 }
      "11100011": { char: "⢳", code: 10419 }
      "11100100": { char: "⢴", code: 10420 }
      "11100101": { char: "⢵", code: 10421 }
      "11100110": { char: "⢶", code: 10422 }
      "11100111": { char: "⢷", code: 10423 }
      "11110000": { char: "⢸", code: 10424 }
      "11110001": { char: "⢹", code: 10425 }
      "11110010": { char: "⢺", code: 10426 }
      "11110011": { char: "⢻", code: 10427 }
      "11110100": { char: "⢼", code: 10428 }
      "11110101": { char: "⢽", code: 10429 }
      "11110110": { char: "⢾", code: 10430 }
      "11110111": { char: "⢿", code: 10431 }
      "10001000": { char: "⣀", code: 10432 }
      "10001001": { char: "⣁", code: 10433 }
      "10001010": { char: "⣂", code: 10434 }
      "10001011": { char: "⣃", code: 10435 }
      "10001100": { char: "⣄", code: 10436 }
      "10001101": { char: "⣅", code: 10437 }
      "10001110": { char: "⣆", code: 10438 }
      "10001111": { char: "⣇", code: 10439 }
      "10011000": { char: "⣈", code: 10440 }
      "10011001": { char: "⣉", code: 10441 }
      "10011010": { char: "⣊", code: 10442 }
      "10011011": { char: "⣋", code: 10443 }
      "10011100": { char: "⣌", code: 10444 }
      "10011101": { char: "⣍", code: 10445 }
      "10011110": { char: "⣎", code: 10446 }
      "10011111": { char: "⣏", code: 10447 }
      "10101000": { char: "⣐", code: 10448 }
      "10101001": { char: "⣑", code: 10449 }
      "10101010": { char: "⣒", code: 10450 }
      "10101011": { char: "⣓", code: 10451 }
      "10101100": { char: "⣔", code: 10452 }
      "10101101": { char: "⣕", code: 10453 }
      "10101110": { char: "⣖", code: 10454 }
      "10101111": { char: "⣗", code: 10455 }
      "10111000": { char: "⣘", code: 10456 }
      "10111001": { char: "⣙", code: 10457 }
      "10111010": { char: "⣚", code: 10458 }
      "10111011": { char: "⣛", code: 10459 }
      "10111100": { char: "⣜", code: 10460 }
      "10111101": { char: "⣝", code: 10461 }
      "10111110": { char: "⣞", code: 10462 }
      "10111111": { char: "⣟", code: 10463 }
      "11001000": { char: "⣠", code: 10464 }
      "11001001": { char: "⣡", code: 10465 }
      "11001010": { char: "⣢", code: 10466 }
      "11001011": { char: "⣣", code: 10467 }
      "11001100": { char: "⣤", code: 10468 }
      "11001101": { char: "⣥", code: 10469 }
      "11001110": { char: "⣦", code: 10470 }
      "11001111": { char: "⣧", code: 10471 }
      "11011000": { char: "⣨", code: 10472 }
      "11011001": { char: "⣩", code: 10473 }
      "11011010": { char: "⣪", code: 10474 }
      "11011011": { char: "⣫", code: 10475 }
      "11011100": { char: "⣬", code: 10476 }
      "11011101": { char: "⣭", code: 10477 }
      "11011110": { char: "⣮", code: 10478 }
      "11011111": { char: "⣯", code: 10479 }
      "11101000": { char: "⣰", code: 10480 }
      "11101001": { char: "⣱", code: 10481 }
      "11101010": { char: "⣲", code: 10482 }
      "11101011": { char: "⣳", code: 10483 }
      "11101100": { char: "⣴", code: 10484 }
      "11101101": { char: "⣵", code: 10485 }
      "11101110": { char: "⣶", code: 10486 }
      "11101111": { char: "⣷", code: 10487 }
      "11111000": { char: "⣸", code: 10488 }
      "11111001": { char: "⣹", code: 10489 }
      "11111010": { char: "⣺", code: 10490 }
      "11111011": { char: "⣻", code: 10491 }
      "11111100": { char: "⣼", code: 10492 }
      "11111101": { char: "⣽", code: 10493 }
      "11111110": { char: "⣾", code: 10494 }
      "11111111": { char: "⣿", code: 10495 }
    bit1: true
    bit2: true
    bit3: true
    bit4: true
    bit5: true
    bit6: true
    bit7: true
    bit8: true
  computed:
    bit: ->
      num = 0
      num +=   1 if @bit1
      num +=   2 if @bit2
      num +=   4 if @bit3
      num +=   8 if @bit4
      num +=  16 if @bit5
      num +=  32 if @bit6
      num +=  64 if @bit7
      num += 128 if @bit8
      ("00000000" + Number(num).toString(2)).slice(-8)
    baraille: ->
      @barailles[@bit]
</script>

<style lang="scss" scoped>
.braille-getter {
  display: flex;
  flex-direction: row;
  align-items: center;

  > .form {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: min-content min-content;
    grid-auto-flow: column;
    grid-gap: var(--space-size-s);
    margin-right: var(--space-size-m);
  }
  > .char {
    display: flex;
    align-items: center;
    justify-content: center;
    // height: calc(100% + 1.2rem);
    margin-top: -1.2rem;
    font-size: 4.7rem;
    font-family: 'Roboto';
    overflow: hidden;
    margin-right: var(--space-size-m);
  }
  > .code {
    font-family: var(--mono-font-family);
  }
}
</style>
