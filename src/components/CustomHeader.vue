<template lang="html">
  <div>
    <nav>
      <div class="nav-wrapper blue darken-2">
        <router-link to="/" class="brand-logo">&nbsp;Fiscaluno</router-link>
        <a href="#" data-target="collapsed" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">partners</a></li>
          <li><a href="#">terms</a></li>
          <li><a href="#">app</a></li>
          <li class="blue accent-4">
            <router-link to="/login">sign in</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" ref="collapsed" id="collapsed">
      <li><a href="#">partners</a></li>
      <li><a href="#">terms</a></li>
      <li><a href="#">app</a></li>
      <li class="blue accent-4">
        <router-link to="/login">sign in</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    const elem = this.$refs.collapsed;
    M.Sidenav.init(elem);
    // this.$refs.collapsed.sidenav();
  },
};
</script>

<style lang="css">
  a {
    left: 10%;
    text-transform: uppercase;
  }
</style>
