<template lang="html">
  <div class="row">
    <div class="col l3">
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle">
          <span class="title">{{ name }}</span>
          <p>First Line <br>
             Second Line
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vinicius Luiz',
    };
  },
};
</script>

<style lang="css">
</style>
