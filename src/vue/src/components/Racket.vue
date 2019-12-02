<template>
  <div class="racket">
    <img onerror="this.src = 'https://dummyimage.com/150x150/c7c5c7/c4c4c4&text=+'" :src="image"/>
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
  props: ['name', 'image', 'price'],
};
</script>

<style scoped>
.racket {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid white;
  padding: 5px;
  max-width: 200px;
  height: 100%;
}
.info {
  margin-top: auto;
  margin-bottom: auto;
}
.title {
  margin-right: 5px;
  color: lightgrey;
}
.info-box:not(:last-child) {
  margin-bottom: 5px;
}
.info-box {
  display: flex;
}
img {
  margin-bottom: 5px;
  width: 200px;
}
</style>
