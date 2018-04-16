<template lang="html">
  <div class="container-fluid">
    <custom-header></custom-header>

    <div style="margin-top: 28vh">
      <facebook-login :callback="loggedIn"></facebook-login>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader';
import CustomFooter from '@/components/CustomFooter';
import FacebookLogin from '@/components/FacebookLogin';

export default {
  components: {
    FacebookLogin,
    CustomHeader,
    CustomFooter,
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
      },
    };
  },
  methods: {
    loggedIn(object) {
      console.log('store', this.$store);
      if (object.response.status === 'connected') {
        this.getUserData(object);
        this.$router.push({
          name: 'user-dashboard',
          params: { user: this.user },
        });
      }
    },
    setUser(profile) {
      this.user.name = profile.name;
      this.user.email = profile.email;
    },
    getUserData(object) {
      object.FB.api('/me', { fields: 'name,email' }, (profile) => {
        this.setUser(profile);
      });
    },
  },
};
</script>

<style lang="css">
</style>
