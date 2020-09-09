<template>
  <div>
    <div id="nav">
      <router-link to="/">{{ $t('home') }}</router-link> |
      <router-link to="/about">{{ $t('about') }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'MainLayout'
};
</script>

<style lang="scss">
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
