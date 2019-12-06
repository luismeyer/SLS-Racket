<template>
  <div class="racket-creator">
    <div class="racket-form">
      <div class="input-wrapper">
        <span>Name:</span>
        <input v-model="name" type="text" />
      </div>
      <div class="input-wrapper">
        <span>Image Url:</span>
        <input v-model="image" type="text" />
      </div>
      <div class="input-wrapper">
        <span>Price:</span>
        <input v-model="price" type="number" />
      </div>
    </div>
    <button v-on:click="submit">SUBMIT</button>
  </div>
</template>

<script>
import { API_URL } from "../utils";

export default {
  data() {
    return {
      name: "",
      image: "",
      price: ""
    };
  },
  methods: {
    submit() {
      fetch(`${API_URL}/api/post/create-racket`, {
        method: "POST",
        body: {
          name: this.name,
          image: this.image,
          price: this.price
        }
      });
    }
  }
};
</script>

<style scoped>
.input-wrapper {
  display: inline-flex;
  flex-direction: column;
}
</style>
