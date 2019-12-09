<template>
  <div class="container" v-bind:class="[outerSpaceBottom, outerSpaceTop]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "container",
  props: ["spaceBottom", "spaceTop"],
  data() {
    const { spaceBottom, spaceTop } = this;

    return {
      outerSpaceBottom: spaceBottom ? `bottom-${spaceBottom}` : "",
      outerSpaceTop: spaceTop ? `top-${spaceTop}` : ""
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 16px;
}
@media only screen and (min-device-width: 650px) {
  .container {
    padding: 0;
    margin: 0 auto;
    max-width: 80%;
  }
}
.bottom-S {
  margin-bottom: 8px;
}
.bottom-M {
  margin-bottom: 16px;
}
.bottom-L {
  margin-bottom: 32px;
}
.bottom-XL {
  margin-bottom: 64px;
}
.top-S {
  margin-top: 8px;
}
.top-M {
  margin-top: 16px;
}
.top-L {
  margin-top: 32px;
}
.top-XL {
  margin-top: 64px;
}
</style>
