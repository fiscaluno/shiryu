<template lang="html">
  <div class="container-fluid">
    <custom-header></custom-header>
    <div class="container-fluid page-content">
      <router-view></router-view>
    </div>
    <custom-footer></custom-footer>
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
};

</script>

<style lang="css">
  .page-content {
    height: 100%;
  }
</style>
