<template>
  <div class="racket" v-bind:class="{ 'is-hidden': isHidden }">
    <img
      class="racket-image"
      onerror="this.src='https://via.placeholder.com/255x255?text=No+Image+found'"
      :src="image"
    />
    <div class="info">
      <div class="info-box">
        <span class="title">Name:</span>
        <span>{{ name }}</span>
      </div>
      <div class="info-box">
        <span class="title">Price:</span>
        <span>{{ price }}</span> €
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "price", "hidden"],
  data() {
    return {
      isHidden: this.hidden
    };
  }
};
</script>

<style scoped>
.racket {
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 3px;
  background-color: white;
}
.racket.is-hidden {
  display: none;
}
.info {
  padding: 10px;
}
.title {
  margin-right: 5px;
  color: black;
  font-weight: bold;
}
.info-box {
  display: flex;
  color: #525252;
}
.racket-image {
  max-width: 100%;
  object-fit: contain;
  border: 1px solid white;
}
</style>
