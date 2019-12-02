<template>
  <div id="app">
    <Title title="Racket Vue App"/>
    <div class="rackets" >
      <div :key="index" v-for="(racket, index) in rackets">
        <Racket :name=racket.name :image=racket.image :price=racket.price />
      </div>
    </div>
    <div>
      <RacketCreator/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Title from './components/Title';
import Racket from './components/Racket';
import RacketCreator from './components/RacketCreator';

export default {
  name: 'App',
  components: {
    RacketCreator,
    Title,
    Racket,
  },
  data() {
    return {
      rackets: null,
    };
  },
  mounted() {
    fetch('/api/get/rackets')
      .then((response) => { this.rackets = response.data; });
  },
};
</script>

<style>
body {
  background: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.rackets {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  flex-wrap: wrap;
  margin-bottom: 50px;
}
</style>
