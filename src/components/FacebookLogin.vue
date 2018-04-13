<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col s12 m5 offset-m3">
        <div class="card-panel">

          <h4 align="center">Fiscaluno login</h4>
          <br/>
          <vue-facebook-login align="center" class="button"
            appId="157805414887234"
            @login="getUserData"
            @logout="onLogout"
            @get-initial-status="getUserData">
          </vue-facebook-login>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueFacebookLogin from 'facebook-login-vuejs';

export default {
  name: 'FacebookLogin',
  components: {
    VueFacebookLogin,
  },
  props: [
    'callback',
  ],
  methods: {
    getUserData(response) {
      this.callback(response);
    },
    onLogout(response) {
      console.log(response);
    },
  },

};

</script>

<style lang="css">
  button img, .spinner {
    visibility: hidden;
  }
  button:hover {
    cursor: pointer;
  }
</style>
