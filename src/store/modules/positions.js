import {ADD_POSITION_TO_POSITIONS, REMOVE_POSITION_FROM_POSITIONS} from '../constants/mutations.type'

const savedPositions = JSON.parse(localStorage.getItem('positions'))

const positions = []
const state = savedPositions !== null ? savedPositions : positions

const getters = {
  getPositions: state => state
}

const actions = {}

/* eslint no-param-reassign: ["error", { "props": false }] */

const mutations = {
  [ADD_POSITION_TO_POSITIONS] (state, payload) {
    state.push(payload)
  },
  [REMOVE_POSITION_FROM_POSITIONS] (state, payload) {
    state.forEach(position => {
      if (position === payload) {
        const elemIndex = state.indexOf(position)
        state.splice(elemIndex, 1)
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
