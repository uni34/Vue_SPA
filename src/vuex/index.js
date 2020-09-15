import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    USERS(state){
      return state.users;
    }
  },
  mutations: {
    SET_USER: (state, users) => {
      state.users = users;
    }
  },
  actions: {
    GET_USER({commit}){
      return Axios('src\store\modules\info.json', {
        method: "GET"
      })
      .then((users) => {
        commit('SET_USER', users.users);
      })
    }
  },

});
