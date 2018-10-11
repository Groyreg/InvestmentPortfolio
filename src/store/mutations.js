import {PUSH_DATA_TO_PRODUCT_ARR, SET_VALUE_TO_PRODUCT} from './constants/mutations.type'
import Vue from 'vue'
import _get from 'lodash/get'

export default {
  [PUSH_DATA_TO_PRODUCT_ARR] (state, payload) {
    const params = payload.fieldName.split('.')
    const lastPart = params.pop()
    const firstPart = params.join('.')
    const sourceObject =
      firstPart !== '' ? _get(state.productAddition, firstPart, state.productAddition) : state.productAddition

    sourceObject[lastPart].push(payload.value)
  },
  [SET_VALUE_TO_PRODUCT] (state, payload) {
    const params = payload.fieldName.split('.')
    const lastPart = params.pop()
    const firstPart = params.join('.')
    const sourceObject =
      firstPart !== '' ? _get(state.productAddition, firstPart, state.productAddition) : state.productAddition

    if (!sourceObject[lastPart]) {
      Vue.set(sourceObject, lastPart, [])
    }

    Vue.set(sourceObject, lastPart, payload.value)
  }
}
