<template>
  <div id="app">
    <piperun-menu></piperun-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu';

export default {
  components: {
    'piperun-menu': Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch('verifySession')
      .then(userIsLogged => { !userIsLogged ? this.$router.push('/') : true });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
