<template lang="html">
  <div class="col l3">
    <div class="row">
      <div class="container-fluid relative-container">
        <h5 class="section-title white-text">{{ title }}</h5>
        <img class="responsive-img small" src="http://materializecss.com/images/sample-1.jpg">
      </div>
    </div>
    <div class="row">
      <ul v-for="course in courses"
        v-bind:key="course"
      >
        <li>
          <a v-bind:href="course[1]">
            {{ course[0] }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css">
  .relative-container {
    position: relative;
  }

  .section-title {
    top: 45%;
    left: 45%;
    position: absolute;
    transform: translate(-45%, -45%);
  }
</style>
