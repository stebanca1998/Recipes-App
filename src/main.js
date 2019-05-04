import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuex from 'vuex'

Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    action: 'Search',
    recipes:[
      {
        Id: '1',
        name: 'Arroz',
        process: 'Cocinarlo'
      },
      {
        Id: '2',
        name: 'Huevo',
        process: 'Fritarlo'
      }
    ]
  },
  mutations: {
    changeAction: (state,val) => {
      state.action = val;
    },
    addRecipe: (state,val) => {
      state.recipes.push(val) ;
    },
    delete_recipe: (state,ind) => {
      state.recipes.splice(ind,1) ;
    }
  },
  getters: {
    action: state => state.action,
    recipes: state => state.recipes 
  },
  actions: {
    deleteRecipe: (context,ind) => {
      context.commit('delete_recipe',ind)
    }
  }

})

new Vue({
  el: '#app',
  render: h => h(App),
  store: store
})
