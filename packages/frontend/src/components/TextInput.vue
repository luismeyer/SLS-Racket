<template>
  <div class="input-wrapper" v-bind:class="[size]">
    <span>{{ label }}</span>
    <input v-model="inputVal" :disabled="disabled" :type="type" />
  </div>
</template>

<script>
export default {
  name: "Textinput",
  props: ["label", "disabled", "value", "type", "size"],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style scoped>
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
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
}
@media only screen and (min-device-width: 650px) {
  .input-wrapper.small {
    max-width: 49%;
  }
}
</style>
