<template lang="html">
  <nav>
    <div class="nav-wrapper blue darken-2">
      <router-link to="/" class="brand-logo">&nbsp;Fiscaluno</router-link>
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
</template>

<script>
export default {
};
</script>

<style lang="css">
  a {
    left: 10%;
    text-transform: uppercase;
  }
</style>
