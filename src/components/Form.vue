<template id="">
  <div class="fo">

    <b-form @submit.prevent="onSubmit" >

      <b-form-group id="input-group-1" label="Recipe's ID:" label-for="input-1">
        <b-form-input id="input-1" type="number" v-model="recipe.Id" required placeholder="Enter recipe's ID"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Recipe's name:" label-for="input-2">
        <b-form-input id="input-2" v-model="recipe.name" placeholder="Enter recipe's name"></b-form-input>
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
          Id: '',
          name: '',
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
        'modifyRecipe'
      ]),
      onSubmit(evt){

        if(this.action=='Create'){
          this.addRp()
        
        }else if(this.action=='Modify'){
          this.modVerify()
        }

      },
      addRp(){
        this.addRecipe(this.recipe);
        alert("Receta creada");
        this.recipe = {}
      },
      modRp(){
        this.modifyRecipe(this.recipe);
        alert("Receta modificada");
        this.recipe = {}
        this.mod=false
      },
      modVerify(){
        var ind = 0;
        this.mod=false
        
        for(var i=0;i<this.recipes.length ; i++){
          if(this.recipes[i].Id == this.recipe.Id){
            ind = i;
            this.mod=true;
            this.recipe.name = this.recipes[i].name
            this.recipe.process = this.recipes[i].process
            breack
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
