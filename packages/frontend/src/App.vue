<template>
  <div id="app">
    <Container space-top="S" space-bottom="M">
      <Title title="Racket Vue App" />
    </Container>
    <Container space-bottom="XL">
      <RacketCreator />
    </Container>
    <Divider size="L" />
    <Container space-top="XL" class="rackets" space-bottom="L">
      <Racket
        v-for="(racket, index) in rackets"
        ref="rackets"
        :key="index"
        :name="racket.name"
        :image="racket.image"
        :price="racket.price"
        :hidden="true"
      />
    </Container>
  </div>
</template>

<script>
import Vue from "vue";
import Title from "./components/Title";
import Container from "./components/Container";
import Racket from "./components/Racket";
import RacketCreator from "./components/RacketCreator";
import Divider from "./components/Divider";

import { API_URL } from "./utils";

export default {
  name: "App",
  components: {
    RacketCreator,
    Title,
    Racket,
    Container,
    Divider
  },
  data() {
    return {
      rackets: []
    };
  },
  mounted() {
    fetch(`${API_URL}/get/rackets`).then(response =>
      response.json().then(({ data }) => {
        this.rackets = JSON.parse(data);

        Vue.nextTick(() => {
          const showGridItem = index => {
            this.$refs.rackets[index].$el.style.display = "flex";
            if (index < this.rackets.length - 1) {
              setTimeout(() => showGridItem(index + 1), 100);
            }
          };

          showGridItem(0);
        });
      })
    );
  }
};
</script>

<style>
body {
  margin: 0;
  background: #2c3e50;
  width: 100vw;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.rackets {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  grid-gap: 20px;
  margin-bottom: 50px;
}
@media only screen and (min-device-width: 650px) {
  .rackets {
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
.racket {
  display: none;
}
</style>
