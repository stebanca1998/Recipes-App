<template>
  <div id="app">

    <h1>EL RECETARIO</h1>

    <b-container fluid id="c">
      <b-row>
        <b-col id="c1" cols="2">
          <Actions/>
        </b-col>
        <b-col id="c2" cols="10">
          <div v-if="action == 'Search'">
            <Browser/>
          </div>
          <div v-else>
            <Form/>
          </div>

        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  import Form from './components/Form.vue';
  import Actions from './components/Actions.vue';
  import Browser from './components/Browser.vue';

  export default {
    name: 'app',
    components: {
      Form,
      Actions,
      Browser
    },
    computed:{
      ...mapState([
      'action',
      'recipes'
    ])
    }


  }
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
  padding-bottom: 30px;

  background:rgb(34,193,195);
  background:linear-gradient(0deg,rgba(34,193,195,1) 0%,rgba(253,187,45,1) 100%);
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

h1{
  font-style:italic;
  font-weight:bold;
  font-size:3em;
  font-family:'Helvetica','Verdana','Monaco',sans-serif;

  margin-bottom: 20px;
}

#c{
  margin-top: 40px;
  padding-right: 28%;
}

#c2{
  padding-left: 20%;
}

#c1{
  padding-top: 10%;
  padding-left: 10%;
}

</style>
