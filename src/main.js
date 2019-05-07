import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuex from 'vuex'
import VueResource from 'vue-resource';

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state:{
    action: 'Search',
    recipes:[]
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
    },
    setRecipes: (state, arr) => {
      
      state.recipes = [];

      for(var i=0; i<arr.length;i++){
        state.recipes.push(arr[i]);
      }
      
    },
    modifyRecipe(state, val){

      for(var i=0; i< state.recipes.length;i++){
        if(state.recipes[i].idrecipe==val.idrecipe){
          state.recipes[i].namerp = val.namerp;
          state.recipes[i].process = val.process;
        }
      }
      
    },
    filtering(state, val){
      state.recipes = [];
      state.recipes.push(val);
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
