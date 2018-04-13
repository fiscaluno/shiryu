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
