<template id="">
  <div id="ma">

    <b-form>
      <b-form-input size="sm" required placeholder="Search by recipe's id or recipe's name"></b-form-input>
      <b-button id="b" type="submit" variant="primary">Search</b-button>
    </b-form>

    <div id="results" >
      <div v-for="(recipe,index) in recipes" :key="index">
        <Card :inid="recipe.Id" :name="recipe.name" :process="recipe.process" :ind="index" />
      </div>
  
    </div>


  </div>

</template>

<script type="text/javascript">

  import Card from './Cards.vue';
  import { mapState } from 'vuex';

  export default{
    components: {
      Card
    },
    computed:{
      ...mapState([
      'recipes'
    ])
    } 
  };

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
