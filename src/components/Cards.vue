<template id="">
  <div id="ca">
    <b-card bg-variant="dark" text-variant="white" :title="name" :sub-title="inid">
      <b-card-text>
        {{process}}
      </b-card-text>
      <hr>
      <b-button variant="danger" v-on:click="removeRecipe">Delete</b-button>
    </b-card>
  </div>

</template>

<script type="text/javascript">

  import { mapActions } from 'vuex';
  
  export default{
    name: 'Cards',
    props: {
      inid: String,
      name: String,
      process: String,
      ind: Number
    },
    methods: {
      ...mapActions([
        'deleteRecipe'
      ]),
      removeRecipe(){
        this.$http.delete('http://localhost:3000/recipe/'+this.inid)
        .then(res => this.deleteRecipe(this.ind) )
      }
    }

  }

</script>

<style media="screen">

#ca{
  margin: 5px;
}

</style>
