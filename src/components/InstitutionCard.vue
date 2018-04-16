<template lang="html">
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image">
        <img :src="this.img">
        <span class="card-title">{{ this.title }}</span>
      </div>
      <div class="card-content">
        <p>{{ this.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'http://materializecss.com/images/sample-1.jpg',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
};
</script>

<style lang="css">
</style>
