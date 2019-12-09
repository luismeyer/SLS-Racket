<template>
  <div class="racket-creator">
    <div class="racket-form">
      <div class="input-wrapper small">
        <span>Name:</span>
        <input :disabled="loading" v-model="name" type="text" />
      </div>
      <div class="input-wrapper small">
        <span>Price:</span>
        <input :disabled="loading" v-model="price" type="number" />
      </div>
      <div class="input-wrapper">
        <span>Image Url:</span>
        <input :disabled="loading" v-model="image" type="text" />
      </div>
    </div>
    <button v-on:click="submit">
      <box-icon
        class="button-icon"
        :animation="animationName"
        :name="iconName"
      ></box-icon>
      <span>SUBMIT</span>
    </button>
  </div>
</template>

<script>
import { API_URL } from "../utils";

export default {
  data() {
    return {
      loading: false,
      name: "",
      image: "",
      price: ""
    };
  },
  computed: {
    animationName() {
      return this.loading ? "spin" : "none";
    },
    iconName() {
      return this.loading ? "loader-circle" : "rocket";
    }
  },
  methods: {
    submit() {
      if (!this.name || !this.image || !this.price) {
        return;
      }

      this.loading = true;
      fetch(`${API_URL}/post/create-racket`, {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          image: this.image,
          price: this.price
        })
      }).then(() => {
        this.loading = false;
        this.name = "";
        this.image = "";
        this.price = "";
      });
    }
  }
};
</script>

<style scoped>
.racket-creator {
  display: flex;
  flex-direction: column;
}
.racket-form {
  display: flex;
  flex-flow: row wrap;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
}
.input-wrapper.small {
  flex: 1;
}
.input-wrapper.small + .input-wrapper.small {
  margin-left: 16px;
}
input {
  border: 3px solid white;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  padding: 8px;
}
input:disabled {
  color: lightgray;
}
button {
  margin-top: 8px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  border: 3px solid white;
  padding: 8px 16px;
  background-color: white;
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.button-icon {
  margin-right: 8px;
  width: 32px;
}
</style>
