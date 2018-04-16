<template lang="html">
  <div class="col l6 search-container offset-l3">
    <div class="row">
      <div class="input-field col l5">
        <i class="material-icons prefix white-text">school</i>
        <input id="course_prefix" type="text" class="white-text">
        <label for="course_prefix">Course</label>
      </div>
      <div class="input-field col l5">
        <i class="material-icons prefix white-text">location_on</i>
        <input id="location_prefix" type="text" class="white-text">
        <label for="location_prefix">Location</label>
      </div>
      <div class="input-field col l1 search-button">
        <a class="btn-floating btn-large waves-effect waves-light blue darken-1">
          <i class="material-icons">search</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
  .search-container {
    top: 20%;
    padding-top: 10px !important;
    background-color: rgba(33,33,33, 0.7);
    position: absolute;
    border-radius: 3px;
  }
  .search-button {
    margin-left: 4vh !important;
  }
</style>
