<template>
  <div id="app" :class="isLocked">
    <LoginForm
      :login-callback="this.login"
      :close-callback="this.closeLogin"
      :hidden="this.hideLogin"
    />
    <Container space-top="S" space-bottom="M">
      <Title>Racket App</Title>
      <Button v-if="loggedIn" @click="this.logout">LOGOUT</Button>
    </Container>
    <div v-if="loggedIn">
      <Container space-bottom="XL">
        <RacketForm />
      </Container>
      <Divider size="L" />
    </div>
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
    <LoginFab v-if="hideLogin && !loggedIn" :click="this.openLogin" />
  </div>
</template>

<script>
import Vue from "vue";

import Title from "./components/Title";
import Container from "./components/Container";
import Racket from "./components/Racket";
import RacketForm from "./components/RacketForm";
import Divider from "./components/Divider";
import LoginFab from "./components/LoginFab";
import LoginForm from "./components/LoginForm";

import { spawnGridAnimation, SESSION_TOKEN_NAME } from "./utils";
import { fetchRackets, fetchAuth } from "./rest";

export default {
  name: "App",
  components: {
    RacketForm,
    Title,
    Racket,
    Container,
    Divider,
    LoginFab,
    LoginForm,
  },
  data() {
    return {
      hideLogin: true,
      loggedIn: false,
      rackets: [],
    };
  },
  computed: {
    isLocked() {
      return this.hideLogin ? "" : "locked";
    },
    notLoggedIn() {
      return !this.loggedIn;
    },
  },
  methods: {
    openLogin() {
      this.hideLogin = false;
    },
    closeLogin() {
      this.hideLogin = true;
    },
    logout() {
      Vue.$cookies.set(SESSION_TOKEN_NAME, "");
      this.loggedIn = false;
    },
    login({ data }) {
      if (data.success === "true") {
        Vue.$cookies.set(SESSION_TOKEN_NAME, `${data.token}-${data.username}`);
        this.loggedIn = true;
        this.hideLogin = true;
      }
    },
  },
  mounted() {
    const getRackets = () =>
      fetchRackets().then(({ data }) => {
        this.rackets = data;
        Vue.nextTick(() => spawnGridAnimation(this.$refs.rackets));
      });

    const token = Vue.$cookies.get(SESSION_TOKEN_NAME);
    if (!token) {
      return getRackets();
    }

    const [password, username] = token.split("-");

    fetchAuth({
      username: username,
      password: password,
    })
      .then(this.login)
      .then(getRackets);
  },
};
</script>

<style>
body {
  margin: 0;
  background: #2c3e50;
  width: 100vw;
}
#app {
  position: initial;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
#app.locked {
  position: fixed;
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
