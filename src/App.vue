<template>
  <div class="container">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainPanel from './views/main.vue';

export default {
  name: 'App',
  components: {
    MainPanel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
