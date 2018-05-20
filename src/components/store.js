import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
    Ldata: []
  },
  actions: {
    loadCoins ({ commit }) {
      axios
        .get('http://163.13.127.53:7153/div_yield')
        .then(r => r.data)
        .then(Ldata= state.r.map(
            r=>{
              date:r.date;
              security_code:r.security_code;
              name:r.name;
              dividend_yield:r.dividend_yield
            }
        )
      )
    }
  },
  mutations: {
    SET_COINS (state, coins) {
      state.coins = coins
    }
  }
})