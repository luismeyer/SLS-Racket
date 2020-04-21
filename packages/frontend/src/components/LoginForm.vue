<template>
  <div class="login-form-container" v-bind:class="{ hidden }">
    <div class="login-content-container">
      <box-icon @click="closeCallback" class="close-icon" name="x"></box-icon>
      <div class="form">
        <div class="form-input">
          <TextInput size="small" label="Username:" v-model="username" />
          <TextInput size="small" label="Password:" v-model="password" type="password" />
        </div>
        <Button :onclick="this.login" :animation="icon.anim" :icon="icon.name">LOGIN</Button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";
import Button from "./Button";

import { fetchLogin } from "../rest";

export default {
  props: ["hidden", "closeCallback", "loginCallback"],
  components: {
    TextInput,
    Button
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      fetchLogin({
        username: this.username,
        password: this.password
      })
        .then(this.loginCallback)
        .then(() => {
          this.loading = false;
          this.username = "";
          this.password = "";
        });
    }
  },
  computed: {
    icon() {
      return this.loading
        ? { name: "loader-circle", anim: "spin" }
        : { name: "user", anim: "none" };
    }
  }
};
</script>

<style scoped>
.login-form-container {
  z-index: 100;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.9);
  transition: top 0.5s ease;
}
.login-form-container.hidden {
  top: -100vh;
}
.login-content-container {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  fill: #525252;
}
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2c3e50;
  padding: 75px 100px;
  border-radius: 3px;
  min-width: 90%;
}
.form-input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media only screen and (min-device-width: 650px) {
  .form {
    min-width: 50%;
  }
}
</style>
