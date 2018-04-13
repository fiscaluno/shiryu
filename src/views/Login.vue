<template lang="html">
  <div style="margin-top: 28vh">
    <facebook-login :callback="loggedIn"></facebook-login>
    <router-view></router-view>
  </div>
</template>

<script>
import FacebookLogin from '@/components/FacebookLogin';

export default {
  components: {
    FacebookLogin,
  },
  methods: {
    loggedIn(response) {
      if (response.authResponse) {
        response.FB.api('/me', { fields: 'name,email' }, (profile) => {
          console.log(profile);
        });
        return this.$router.push('dashboard');
      }
      return console.log('not logged', response.FB);
    },
  },
};
</script>

<style lang="css">
</style>
