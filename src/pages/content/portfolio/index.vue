<template>
  <div
    style="background-image: url('static/img/portfolio_bgc.jpg')"
    class="portfolio">
    <div class="portfolio__container container">
      <header class="portfolio__header">
        <h2 class="portfolio__heading">{{ title }}</h2>
      </header>
      <section class="portfolio__list">
        <template v-if="cards.length">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="portfolio__item">
            <card
              :card="card"
              :index="index"/>
          </div>
        </template>
        <div class="portfolio__item">
          <card
            :state-add="false"
            :state-adding="true"
            :state-added="false"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from './includes/card'

export default {
  components: {
    Card
  },
  data () {
    return {
      title: 'Your portfolio',
      cards: []
    }
  }
}
</script>
