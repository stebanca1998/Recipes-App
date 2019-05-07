<template id="">
  <div id="ma">

    <b-form>
      <b-form-input size="sm" v-model="criteria" placeholder="Search by recipe's id or recipe's name"></b-form-input>
      <b-button id="b" type="submit" v-on:click="filter" variant="primary">Search</b-button>
    </b-form>

    <div id="results" >
      <div v-for="(recipe,index) in recipes" :key="index">
        <Card :inid="recipe.idrecipe" :name="recipe.namerp" :process="recipe.process" :ind="index" />
      </div>
  
    </div>


  </div>

</template>

<script type="text/javascript">

  import Card from './Cards.vue';
  import { mapState, mapMutations } from 'vuex';

  export default{
    
    data() {
      return {
        criteria: ''
      }
    },
    components: {
      Card
    },
    computed:{
      ...mapState([
      'recipes'
    ])
    },
    created() {
    this.$http.get('http://localhost:3000/recipes')
    .then(res => this.setRecipes(res.data) )
    },
    methods:{
     ...mapMutations([
        'setRecipes',
        'filtering'
      ]),
      filter(e){
        e.preventDefault();

        if(this.criteria == ''){
          this.$http.get('http://localhost:3000/recipes')
          .then(res => this.setRecipes(res.data) )
        }else {
          this.$http.get('http://localhost:3000/recipe/'+this.criteria)
          .then(res => this.filtering(res.data))
        }
      }
    }
    
  }

</script>

<style media="screen">

#b{
  margin-left: 85%;
  margin-top: 6px;
}

#results{
  margin: 10px;
  padding: 5px;
  overflow-y: scroll;
  height: 400px;
}

#ma{
  margin-bottom: 20px;

}

</style>
