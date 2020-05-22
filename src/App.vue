<template>
  <div id="app">
    <header>
      <div class="d-flex navBar">
        <div class="col-6 text-left">
          <router-link to="/home" id="navbar">Home |</router-link>
          <router-link to="/huella" id="navbar"> Tu Huella |</router-link>
          <router-link to="/noticias" id="navbar"> Noticias |</router-link>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" id="navbar">| Iniciar Sesion |</router-link>
          <router-link to="/regyster" id="navbar">| Registrarse |</router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {}
</script>

<style>
#app {
  background-image: url("./assets/boy.jpg");
  height: 100%;
  margin: auto;
  display: block;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navBar {
  color: white;
  font-size: 25px;
  text-align: center;
  border-bottom: solid white;
  margin-left: 10px;
  margin-right: 40px;
  padding: 6px;
}
#navbar{
  text-decoration: none;
  color: white;
  font-size: 30px;
}

</style>
