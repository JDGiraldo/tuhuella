<template>
<div>
    <div class="row">
        <div class="col-4">
            <div class="huella">
                <h1> Tu Huella </h1>
                <div v-if="mostrar">
                 <router-link to="/formularios" id="navbar">
            <button @click="registro" class="btn btn-warning" style="color: white;">
                Registra tu huella de Co2</button>
                 </router-link>
                 </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="footer">
                <ComponenteFooter></ComponenteFooter>
            </div>
        </div>
    </div>
</div>

</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import ComponenteFooter from './ComponenteFooter.vue';


@Component({
  components: {
    ComponenteFooter,
  },
})
export default class ComponenteHome extends Vue {
}
</script>
<style>
.huella{
    color: gray;
 font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 margin: 170px 0px 0px 0px;
 padding: 0px 0px 0px 200px;
 left: 40px;
}
.footer{
    background: rgba(128, 128, 128, 0.589);
    top: 230px;
    position: relative;
}
</style>
