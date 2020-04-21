<template>
  <div class="title">
    <h1>
      <slot></slot>
    </h1>
    <div class="title-border" />
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
h1 {
  margin: 0;
  display: flex;
  align-items: center;
}
.title {
  position: relative;
  overflow: hidden;
}
.title-border {
  animation: 1s ease-in-out 0s 1 slideInFromLeft;
  width: 50%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
}
</style>
