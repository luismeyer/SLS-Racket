<template>
  <div class="racket-form-container">
    <div class="racket-form">
      <TextInput label="Name:" size="small" type="text" :disabled="loading" v-model="name" />
      <TextInput label="Price:" size="small" type="number" :disabled="loading" v-model="price" />
      <TextInput label="Image Url:" type="text" :disabled="loading" v-model="image" />
    </div>
    <Button
      :onclick="this.submit"
      :icon="iconName"
      :animation="animationName"
      :disabled="loading"
    >UPLOAD</Button>
  </div>
</template>

<script>
import Button from "./Button";
import TextInput from "./TextInput";
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
  components: {
    TextInput,
    Button
  },
  computed: {
    animationName() {
      return this.loading ? "spin" : "none";
    },
    iconName() {
      return this.loading ? "loader-circle" : "cloud-upload";
    }
  },
  methods: {
    submit() {
      if (!this.name || !this.image || !this.price || this.loading) {
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
.racket-form-container {
  display: flex;
  flex-direction: column;
}
.racket-form {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
}
</style>
