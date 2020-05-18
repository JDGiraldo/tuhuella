<template>
  <div id="app">
    <div class="d-flex">
        <div class="col-12">
          <ComponenteHeader></ComponenteHeader>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ComponenteHeader from './components/ComponenteHeader.vue';
import ComponenteHuella from './components/ComponenteHuella.vue';

@Component({
  components: {
    HelloWorld,
    ComponenteHeader,
    ComponenteHuella,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
   background-image: url('./assets/boy.jpg');
   overflow-y: hidden;
   height: 100vh;
   overflow-x: hidden;
   margin: auto;
   display:block;
   background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
