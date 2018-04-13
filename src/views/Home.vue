<template lang="html">
  <div class="container-fluid">
    <nav>
      <div class="nav-wrapper blue darken-2">
        <a href="#" class="brand-logo">&nbsp;Fiscaluno</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="css">
</style>
