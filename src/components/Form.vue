<template id="">
  <div class="fo">

    <b-form @submit.prevent="onSubmit" >

      <b-form-group id="input-group-1" label="Recipe's ID:" label-for="input-1">
        <b-form-input id="input-1" type="number" v-model="recipe.idrecipe" required placeholder="Enter recipe's ID"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Recipe's name:" label-for="input-2">
        <b-form-input id="input-2" v-model="recipe.namerp" placeholder="Enter recipe's name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Recipe's process:" label-for="input-3">
        <b-form-textarea id="input-3" v-model="recipe.process" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>

      <div v-if="mod">
        <b-button type="submit" variant="primary" v-on:click="modRp" style="margin: 5px">Modify</b-button>
      </div>
      <b-button type="submit" variant="primary">Accept</b-button>

    </b-form>

  </div>

</template>

<script type="text/javascript">

  import { mapState, mapMutations } from 'vuex';
  
  export default{
    data() {
      return {
        recipe:{
          idrecipe: '',
          namerp: '',
          process: ''
        },
        mod: false
      }
    },
    computed:{
      ...mapState([
      'action',
      'recipes'
    ])
    },
    methods: {
      ...mapMutations([
        'addRecipe',
        'modifyRecipe',
        'setRecipes'
      ]),
      onSubmit(evt){

        if(this.action=='Create'){
          this.addVerify()
        
        }else if(this.action=='Modify'){
          this.modVerify()
        }

      },
      addRp(){

        this.$http.post('http://localhost:3000/recipe/'+this.recipe.idrecipe,this.recipe)
        .then(res => this.addRecipe(res.data) )
        
        alert("Receta creada");
        this.recipe = {}
      },
      addVerify(){
        var ind = 0;
        
        for(var i=0;i<this.recipes.length ; i++){
          if(this.recipes[i].idrecipe == this.recipe.idrecipe){

            alert("There is a recipe with identifier: " + this.recipe.idrecipe + ". Try with other indentifier")
            this.recipe.idrecipe = ''

            ind = ind + 1;

            break
          }
        }

        if(ind===0){
          this.addRp();
          
          this.recipe = {}
        }
      },
      modRp(){
        this.$http.put('http://localhost:3000/recipe/'+this.recipe.idrecipe,this.recipe)
        .then(res => this.modifyRecipe(res.data) )

        alert("Receta modificada");
        this.recipe = {}
        this.mod=false
      },
      modVerify(){
        var ind = 0;
        this.mod=false
        
        for(var i=0;i<this.recipes.length ; i++){
          if(this.recipes[i].idrecipe == this.recipe.idrecipe){
            ind = i;
            this.mod=true;
            this.recipe.namerp = this.recipes[i].namerp
            this.recipe.process = this.recipes[i].process
            break
          }
        }

        if(ind===0){
          alert("There is no recipe with identifier: " + this.recipe.iid)
          this.recipe = {}
        }

      }

    }


  }

</script>

<style media="screen">

</style>
