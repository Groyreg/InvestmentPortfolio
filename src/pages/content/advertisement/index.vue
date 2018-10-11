<template>
  <div class="advertisement container">
    <header class="advertisement__header">
      <h2 class="advertisement__heading">{{ title }}</h2>
    </header>
    <section class="advertisement__list">
      <a
        v-for="(card, key) in cards"
        :key="key"
        :style="`background-image: url(static/img/${card}.jpg)`"
        href="#"
        class="advertisement__item"/>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Some awesome ideas',
      cards: [
        'chart',
        'currency',
        'success'
      ]
    }
  }
}
</script>
