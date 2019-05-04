<template >
  <div id="actions">
    <b-button-group vertical>
      <b-button variant="outline-dark" class="btn btn-lg btn-block" v-on:click="change('Search')">Search</b-button>
      <b-button variant="outline-dark" class="btn btn-lg btn-block" v-on:click="change('Create')">Create</b-button>
      <b-button variant="outline-dark" class="btn btn-lg btn-block" v-on:click="change('Modify')">Modify</b-button>
    </b-button-group>

  </div>
</template>

<script type="text/javascript">

  import { mapMutations } from 'vuex';

  export default{
    
    methods: {
      ...mapMutations([
        'changeAction'
      ]),
      change(val){
        this.changeAction(val)
      }
    }

  }

</script>

<style media="screen">

</style>
