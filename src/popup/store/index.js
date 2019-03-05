import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

Vue.use(Vuex)

const state = {
  view: 'list',
  selectedId: -1,
  selectorId: -1,
  urls: []
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocalStorage.plugin]
})

export default store