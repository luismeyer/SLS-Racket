<template>
  <button @click="click" class="fab-wrapper">
    <box-icon name="rocket"></box-icon>
  </button>
</template>

<script>
export default {
  props: ["click"]
};
</script>

<style scoped>
.fab-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  bottom: 20px;
  background-color: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
