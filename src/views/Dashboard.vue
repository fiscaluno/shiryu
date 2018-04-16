<template lang="html">
  <div>
    <div class="row">
      <div class="col l3">
        <ul class="collection">
          <li class="collection-item avatar">
            <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle">
            <span class="title">{{ user.name }}</span>
            <p>{{ user.email }}<br>
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'user',
  ],
};
</script>

<style lang="css">
</style>
