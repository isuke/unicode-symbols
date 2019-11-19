<template lang="pug">
.sample-list
  h2.subtitle Decoration
  title-decoration-list.content
  logo-decoration-list.content
  text-decoration-list.content
  char-decoration-list.content

  h2.subtitle Spinner
  ul.content.list
    li.item: span ⤾
    li.item: span ⤿
    li.item: span ⟲
    li.item: span ⟳
    li.item: span ⵕ
    li.item: span ⃙
    li.item: span ⃚
    li.item: span ⌔
    li.item: span ⌕
    li.item: span ⌮
    li.item: span ⎋
    li.item: span ☌
    li.item: span ✇
    li.item: span ⨕

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

  h2.subtitle Number
  table.content.table
    thead.head
      tr.row
        <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td>32</td><td>33</td><td>34</td><td>35</td><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td><td>60</td><td>70</td><td>80</td>
    tbody
      tr.row
        <td>₀</td><td>₁</td><td>₂</td><td>₃</td><td>₄</td><td>₅</td><td>₆</td><td>₇</td><td>₈</td><td>₉</td>
      tr.row
        <td></td><td>Ⅰ</td><td>Ⅱ</td><td>Ⅲ</td><td>Ⅳ</td><td>Ⅴ</td><td>Ⅵ</td><td>Ⅶ</td><td>Ⅷ</td><td>Ⅸ</td><td>Ⅹ</td><td>Ⅺ</td><td>Ⅻ</td>
      tr.row
        <td></td><td>ⅰ</td><td>ⅱ</td><td>ⅲ</td><td>ⅳ</td><td>ⅴ</td><td>ⅵ</td><td>ⅶ</td><td>ⅷ</td><td>ⅸ</td><td>ⅹ</td><td>ⅺ</td><td>ⅻ</td>
      tr.row
        <td>⓪</td><td>①</td><td>②</td><td>③</td><td>④</td><td>⑤</td><td>⑥</td><td>⑦</td><td>⑧</td><td>⑨</td><td>⑩</td><td>⑪</td><td>⑫</td><td>⑬</td><td>⑭</td><td>⑮</td><td>⑯</td><td>⑰</td><td>⑱</td><td>⑲</td><td>⑳</td><td>㉑</td><td>㉒</td><td>㉓</td><td>㉔</td><td>㉕</td><td>㉖</td><td>㉗</td><td>㉘</td><td>㉙</td><td>㉚</td><td>㉛</td><td>㉜</td><td>㉝</td><td>㉞</td><td>㉟</td><td>㊱</td><td>㊲</td><td>㊳</td><td>㊴</td><td>㊵</td><td>㊶</td><td>㊷</td><td>㊸</td><td>㊹</td><td>㊺</td><td>㊻</td><td>㊼</td><td>㊽</td><td>㊾</td><td>㊿</td>
      tr.row
        <td></td><td>⑴</td><td>⑵</td><td>⑶</td><td>⑷</td><td>⑸</td><td>⑹</td><td>⑺</td><td>⑻</td><td>⑼</td><td>⑽</td><td>⑾</td><td>⑿</td><td>⒀</td><td>⒁</td><td>⒂</td><td>⒃</td><td>⒄</td><td>⒅</td><td>⒆</td><td>⒇</td>
      tr.row
        <td></td><td>⒈</td><td>⒉</td><td>⒊</td><td>⒋</td><td>⒌</td><td>⒍</td><td>⒎</td><td>⒏</td><td>⒐</td><td>⒑</td><td>⒒</td><td>⒓</td><td>⒔</td><td>⒕</td><td>⒖</td><td>⒗</td><td>⒘</td><td>⒙</td><td>⒚</td><td>⒛</td>
      tr.row
        <td></td><td>⓵</td><td>⓶</td><td>⓷</td><td>⓸</td><td>⓹</td><td>⓺</td><td>⓻</td><td>⓼</td><td>⓽</td><td>⓾</td>
      tr.row
        <td></td><td>➀</td><td>➁</td><td>➂</td><td>➃</td><td>➄</td><td>➅</td><td>➆</td><td>➇</td><td>➈</td><td>➉</td>
      tr.row
        <td></td><td>❶</td><td>❷</td><td>❸</td><td>❹</td><td>❺</td><td>❻</td><td>❼</td><td>❽</td><td>❾</td><td>❿</td>
      tr.row
        <td></td><td>➊</td><td>➋</td><td>➌</td><td>➍</td><td>➎</td><td>➏</td><td>➐</td><td>➑</td><td>➒</td><td>➓</td>
      tr.row
        <td>⓿</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>⓫</td><td>⓬</td><td>⓭</td><td>⓮</td><td>⓯</td><td>⓰</td><td>⓱</td><td>⓲</td><td>⓳</td><td>⓴</td>
      tr.row
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>㉈</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>㉉</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>㉊</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>㉋</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>㉌</td><td>㉍</td><td>㉎</td><td>㉏</td>
      tr.row
        <td></td><td>♳</td><td>♴</td><td>♵</td><td>♶</td><td>♷</td><td>♸</td><td>♹</td>
      tr.row
        <td></td><td>⚀</td><td>⚁</td><td>⚂</td><td>⚃</td><td>⚄</td><td>⚅</td>
      tr.row
        <td></td><td>㈠</td><td>㈡</td><td>㈢</td><td>㈣</td><td>㈤</td><td>㈥</td><td>㈦</td><td>㈧</td><td>㈨</td><td>㈩</td>
      tr.row
        <td></td><td>㊀</td><td>㊁</td><td>㊂</td><td>㊃</td><td>㊄</td><td>㊅</td><td>㊆</td><td>㊇</td><td>㊈</td><td>㊉</td>
      tr.row
        <td>㍘</td><td>㍙</td><td>㍚</td><td>㍛</td><td>㍜</td><td>㍝</td><td>㍞</td><td>㍟</td><td>㍠</td><td>㍡</td><td>㍢</td><td>㍣</td><td>㍤</td><td>㍥</td><td>㍦</td><td>㍧</td><td>㍨</td><td>㍩</td><td>㍪</td><td>㍫</td><td>㍬</td><td>㍭</td><td>㍮</td><td>㍯</td><td>㍰</td>
      tr.row
        <td></td><td>㋀</td><td>㋁</td><td>㋂</td><td>㋃</td><td>㋄</td><td>㋅</td><td>㋆</td><td>㋇</td><td>㋈</td><td>㋉</td><td>㋊</td><td>㋋</td>
      tr.row
        <td></td><td>㏠</td><td>㏡</td><td>㏢</td><td>㏣</td><td>㏤</td><td>㏥</td><td>㏦</td><td>㏧</td><td>㏨</td><td>㏩</td><td>㏪</td><td>㏫</td><td>㏬</td><td>㏭</td><td>㏮</td><td>㏯</td><td>㏰</td><td>㏱</td><td>㏲</td><td>㏳</td><td>㏴</td><td>㏵</td><td>㏶</td><td>㏷</td><td>㏸</td><td>㏹</td><td>㏺</td><td>㏻</td><td>㏼</td><td>㏽</td><td>㏾</td>

  h2.subtitle Alphabet
  table.content.table
    thead.head
      tr.row
        <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td>
    tbody
      tr.row
        <td>⒜</td><td>⒝</td><td>⒞</td><td>⒟</td><td>⒠</td><td>⒡</td><td>⒢</td><td>⒣</td><td>⒤</td><td>⒥</td><td>⒦</td><td>⒧</td><td>⒨</td><td>⒩</td><td>⒪</td><td>⒫</td><td>⒬</td><td>⒭</td><td>⒮</td><td>⒯</td><td>⒰</td><td>⒱</td><td>⒲</td><td>⒳</td><td>⒴</td><td>⒵</td>
      tr.row
        <td>Ⓐ</td><td>Ⓑ</td><td>Ⓒ</td><td>Ⓓ</td><td>Ⓔ</td><td>Ⓕ</td><td>Ⓖ</td><td>Ⓗ</td><td>Ⓘ</td><td>Ⓙ</td><td>Ⓚ</td><td>Ⓛ</td><td>Ⓜ</td><td>Ⓝ</td><td>Ⓞ</td><td>Ⓟ</td><td>Ⓠ</td><td>Ⓡ</td><td>Ⓢ</td><td>Ⓣ</td><td>Ⓤ</td><td>Ⓥ</td><td>Ⓦ</td><td>Ⓧ</td><td>Ⓨ</td><td>Ⓩ</td>
      tr.row
        <td>ⓐ</td><td>ⓑ</td><td>ⓒ</td><td>ⓓ</td><td>ⓔ</td><td>ⓕ</td><td>ⓖ</td><td>ⓗ</td><td>ⓘ</td><td>ⓙ</td><td>ⓚ</td><td>ⓛ</td><td>ⓜ</td><td>ⓝ</td><td>ⓞ</td><td>ⓟ</td><td>ⓠ</td><td>ⓡ</td><td>ⓢ</td><td>ⓣ</td><td>ⓤ</td><td>ⓥ</td><td>ⓦ</td><td>ⓧ</td><td>ⓨ</td><td>ⓩ</td>
      tr.row
      tr.row

</template>

<script lang="coffee">
import TitleDecorationList from "@/components/TitleDecorationList.vue"
import LogoDecorationList  from "@/components/LogoDecorationList.vue"
import TextDecorationList  from "@/components/TextDecorationList.vue"
import CharDecorationList  from "@/components/CharDecorationList.vue"

export default
  components:
    "title-decoration-list": TitleDecorationList
    "logo-decoration-list": LogoDecorationList
    "text-decoration-list": TextDecorationList
    "char-decoration-list": CharDecorationList
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
    margin-bottom: var(--space-size-m);
  }
}
</style>
