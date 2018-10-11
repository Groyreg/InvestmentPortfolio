import {SHOW_LOADER, HIDE_LOADER, SET_PROPERTIES_TO_PRODUCT_ADDITION} from '../constants/mutations.type'
import {FETCH_BASE_PRODUCT_FORM, SET_ACTIVE_STATE_CHECK_FOR_MATCHES} from '../constants/actions.type'

const savedProduct = JSON.parse(localStorage.getItem('product'))

const product = {
  images: [],
  section: null,
  category: null,
  suggestedSection: null,
  suggestedCategory: null,
  style: null,
  zone: null,
  vendorCode: null,
  productName: null,
  description: {
    russian: null,
    english: null,
    armenian: null
  },
  model: [],
  modelTexture: [],
  productionTime: null,
  basePrice: null,
  currency: null,
  properties: {}
}

const state = savedProduct !== null ? savedProduct : product

const getters = {
  getProduct: state => state,
  getProductImages: state => state.images,
  getProductSection: state => state.section,
  getProductCategory: state => state.category,
  getProductSuggestedSection: state => state.suggestedSection,
  getProductSuggestedCategory: state => state.suggestedCategory,
  getProductStyle: state => state.style,
  getProductZone: state => state.zone,
  getProductVendorCode: state => state.vendorCode,
  getProductProductName: state => state.productName,
  getProductDescription: state => state.description,
  getProductModel: state => state.model,
  getProductModelTexture: state => state.modelTexture,
  getProductProductionTime: state => state.productionTime,
  getProductBasePrice: state => state.basePrice,
  getProductCurrency: state => state.currency
}

const actions = {
  [FETCH_BASE_PRODUCT_FORM] ({commit, state, dispatch}) {
    commit(SHOW_LOADER)

    setTimeout(() => {
      dispatch(SET_ACTIVE_STATE_CHECK_FOR_MATCHES)
      commit(HIDE_LOADER)
    }, 1500)
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */

const mutations = {
  [SET_PROPERTIES_TO_PRODUCT_ADDITION] (state, payload) {
    state.properties = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
