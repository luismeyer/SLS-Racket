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
      if (!this.name || !this.image || !this.price) {
        return;
      }
      fetch(`${API_URL}/post/create-racket`, {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          image: this.image,
          price: this.price
        })
      }).then(() => {
        this.name = "";
        this.image = "";
        this.price = "";
      });
    }
  }
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
