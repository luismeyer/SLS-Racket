<template>
  <div class="divider" v-bind:class="[dividerSize]"></div>
</template>

<script>
export default {
  name: "divider",
  props: ["size"],
  data() {
    return {
      dividerSize: `size-${this.size}`
    };
  }
};
</script>

<style scoped>
.divider {
  height: 3px;
  max-width: 100%;
  background-color: white;
}
.divider.size-L {
  max-width: 90%;
  margin: auto;
}
.divider.size-M {
  max-width: 70%;
  margin: auto;
}
.divider.size-S {
  max-width: 50%;
  margin: auto;
}
</style>
