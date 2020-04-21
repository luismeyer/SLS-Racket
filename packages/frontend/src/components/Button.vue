<template>
  <button class="primary-button" :disabled="disabled" @click="onclick">
    <span class="button-label">
      <slot />
    </span>
    <box-icon class="button-icon" :animation="animation" :name="icon"></box-icon>
  </button>
</template>

<script>
export default {
  props: ["label", "onclick", "icon", "disabled", "animation"]
};
</script>

<style scoped>
.primary-button {
  margin-top: 8px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  border: 3px solid white;
  padding: 8px 16px;
  background-color: white;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
.primary-button:disabled {
  cursor: initial;
}
.button-label {
  font-weight: bold;
  font-size: 16px;
  color: black;
  margin-left: 8px;
}
.button-icon {
  margin-left: 8px;
  width: 32px;
}
</style>
