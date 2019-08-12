<template>
  <div id="app">
    <piperun-menu class="side-menu"></piperun-menu>
    <div class="main-column">
      <router-view></router-view>
    </div>
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
      .then(res => { 
        if(!res && this.$route.path != "/") {
          this.$router.push('/') 
        }
      }); // Caso não haja nenhuma sessão de usuário, a página é redirecionada para a tela de login
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 130px;
}

.main-column {
  position: absolute;
  top: 10px;
  right: 35px;
  width: calc(100% - 130px - 70px);
  /* background: red; */

}
</style>
