<template>
  <div class="portfolio-card">
    <section
      v-show="localStates.stateAdd"
      class="portfolio-card__section _center _with-cursor"
      @click="showAddingPosition">
      <img
        src="static/img/plus.svg"
        alt=""
        class="portfolio-card__img-add">
    </section>
    <section
      v-show="localStates.stateAdding"
      class="portfolio-card__section">
      <div class="portfolio-card__row">
        <label
          for="#currency"
          class="portfolio-card__label">Choose currency to add</label>
        <v-select
          id="#currency"
          v-model="selectedCurrency"
          :options="currencies"/>
      </div>
      <div class="portfolio-card__row">
        <label
          for="#price"
          class="portfolio-card__label">Enter price</label>
        <input
          id="#price"
          type="text"
          class="portfolio-card__input">
      </div>
      <div class="portfolio-card__row">
        <label
          for="#quantity"
          class="portfolio-card__label">Enter quantity</label>
        <input
          id="#quantity"
          type="text"
          class="portfolio-card__input">
      </div>
      <div class="portfolio-card__row">
        <label
          for="#direction"
          class="portfolio-card__label">Select position direction</label>
        <input
          id="#direction"
          type="text"
          class="portfolio-card__input">
      </div>
      <div class="portfolio-card__row _center">
        <button
          class="button"
          @click="showAddedPosition">Add position</button>
      </div>
    </section>
    <section
      v-show="localStates.stateAdded"
      class="portfolio-card__section _center">
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">USD/EUR</label>
        <div class="portfolio-card__content">
          <img
            src="static/img/money.svg"
            alt=""
            class="portfolio-card__img-icon">
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">Current price</label>
        <div class="portfolio-card__content">
          <span class="portfolio-card__text">13 600 p</span>
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">Position price</label>
        <div class="portfolio-card__content">
          <span class="portfolio-card__text">13 600 p</span>
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">Margin</label>
        <div class="portfolio-card__content">
          <span class="portfolio-card__text">+ 100 p</span>
        </div>
      </div>
      <div class="portfolio-card__row">
        <button
          class="button"
          @click="showAddingPosition">Edit position</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: String,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    stateAdd: {
      type: Boolean,
      default: false
    },
    stateAdding: {
      type: Boolean,
      default: true
    },
    stateAdded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedCurrency: null,
      localStates: {
        stateAdd: this.stateAdd,
        stateAdding: this.stateAdding,
        stateAdded: this.stateAdded
      },
      currencies: [
        'EUR/USD',
        'GBP/USD',
        'USD/JPY',
        'USD/CAD',
        'USD/RUB'
      ]
    }
  },
  methods: {
    showAddingPosition () {
      this.localStates.stateAdd = false
      this.localStates.stateAdding = true
      this.localStates.stateAdded = false
    },
    showAddedPosition () {
      this.localStates.stateAdd = false
      this.localStates.stateAdding = false
      this.localStates.stateAdded = true
    },
    addNewCard () {

    }
  }
}
</script>
