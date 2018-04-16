<template lang="html">
  <div class="container-fluid">
    <router-view></router-view>
    <custom-header></custom-header>
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
import CustomHeader from '@/components/CustomHeader';
import CustomFooter from '@/components/CustomFooter';

export default {
  components: {
    CustomHeader,
    CustomFooter,
  },
  props: [
    'user',
  ],
};
</script>

<style lang="css">
</style>
