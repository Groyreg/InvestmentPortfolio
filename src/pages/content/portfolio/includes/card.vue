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
          for="currency"
          class="portfolio-card__label">Choose currency to add</label>
        <v-select
          id="currency"
          v-model="position.currency"
          :options="currencies"/>
      </div>
      <div class="portfolio-card__row">
        <label
          for="price"
          class="portfolio-card__label">Enter price</label>
        <input
          id="price"
          v-model="position.price"
          type="text"
          class="portfolio-card__input">
      </div>
      <div class="portfolio-card__row">
        <label
          for="quantity"
          class="portfolio-card__label">Enter quantity</label>
        <input
          id="quantity"
          v-model="position.quantity"
          type="text"
          class="portfolio-card__input">
      </div>
      <div class="portfolio-card__row">
        <div class="portfolio-card__label">Select position direction</div>
        <div class="portfolio-card__content">
          <label
            for="buy"
            class="radio">
            <input
              id="buy"
              v-model="position.direction"
              value="Buy"
              type="radio"
              name="direction">
            <span class="radio__label">Buy</span>
            <span class="radio__btn"/>
          </label>
          <label
            for="sell"
            class="radio">
            <input
              id="sell"
              v-model="position.direction"
              value="Sell"
              type="radio"
              name="direction">
            <span class="radio__label">Sell</span>
            <span class="radio__btn"/>
          </label>
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <button
          class="button"
          @click="handleAddingPosition">Add position</button>
      </div>
    </section>
    <section
      v-if="card !== null"
      v-show="localStates.stateAdded"
      class="portfolio-card__section _center">
      <div class="portfolio-card__row _center">
        <label class="portfolio-card__label">{{ card.currency }}</label>
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
          <span class="portfolio-card__text">{{ card.currentPrice }}</span>
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">Position price</label>
        <div class="portfolio-card__content">
          <span class="portfolio-card__text">{{ card.price }} rub</span>
        </div>
      </div>
      <div class="portfolio-card__row _center">
        <label
          class="portfolio-card__label">Margin</label>
        <div class="portfolio-card__content">
          <span class="portfolio-card__text">{{ marginPrice }} rub</span>
        </div>
      </div>
      <div class="portfolio-card__row">
        <button
          class="button"
          @click="removePosition">Remove position</button>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {ADD_POSITION_TO_POSITIONS, REMOVE_POSITION_FROM_POSITIONS} from '../../../../store/constants/mutations.type'
import {INVESTMENT_PORTFOLIO} from '../../../../store/constants/variables'

export default {
  props: {
    card: {
      type: Object,
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
      ],
      position: {
        currency: null,
        currentPrice: null,
        price: null,
        quantity: null,
        direction: null
      }
    }
  },
  computed: {
    ...mapGetters({
      positions: 'getPositions'
    }),
    marginPrice: function () {
      return this.calculateMarginPrice()
    }
  },
  methods: {
    calculateMarginPrice () {
      if (this.card === null) {
        return 'margin price is unavailable'
      }
      if (this.card.direction === 'Buy') {
        return ((this.card.currentPrice - this.card.price) * this.card.quantity).toFixed(1)
      } else if (this.card.direction === 'Sell') {
        return ((this.card.price - this.card.currentPrice) * this.card.quantity).toFixed(1)
      }
    },
    showAddingPosition () {
      this.localStates.stateAdd = false
      this.localStates.stateAdding = true
      this.localStates.stateAdded = false
    },
    showAddPosition () {
      this.localStates.stateAdd = true
      this.localStates.stateAdding = false
      this.localStates.stateAdded = false
    },
    handleAddingPosition () {
      this.updatePositionPrice()
    },
    setPositionToStore () {
      const payload = Object.assign({}, this.position)
      this.$store.commit(ADD_POSITION_TO_POSITIONS, payload)
    },
    setToLocalStorage () {
      localStorage.setItem(INVESTMENT_PORTFOLIO, JSON.stringify(this.positions))
    },
    clearLocalStorage () {
      localStorage.removeItem(INVESTMENT_PORTFOLIO)
    },
    removePosition () {
      this.$store.commit(REMOVE_POSITION_FROM_POSITIONS, this.card)
    },
    updatePositionPrice () {
      if (this.position.currency == null) {
        return
      }
      const selectedCurrency = this.position.currency.replace('/', '_')
      const address = `http://free.currencyconverterapi.com/api/v5/convert?q=${selectedCurrency}&compact=y`
      const headers = new Headers()
      const fetchOptions = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
      }
      fetch(address, fetchOptions)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw res.error
          }
          this.position.currentPrice = res[selectedCurrency].val
          this.setPositionToStore()
          this.showAddPosition()
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
