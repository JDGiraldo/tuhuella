<template>
    <div class="background" style="margin-top: 5px; padding-top: 40px;">
        <div class="text-left">
        <h1>Calcula tu Huella de Carbono</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                <router-link to="/energia" id="navbar">
                    <img class="imagenes" src="./../assets/energia.png" alt="" >
                    <div></div>
                </router-link>
                </div>
                <div class="col-4">
                     <router-link to="/movilizacion" id="navbar">
                      <img class="imagenes" src="./../assets/auto.png" alt="" >
                    </router-link>
                </div>
                <div class="col-4">
                     <router-link to="/aliment" id="navbar">
                      <img class="imagenes" src="./../assets/comida.png" alt="" >
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <h2>Energia</h2>
                </div>
                <div class="col-4">
                    <h2>Movilización</h2>
                </div>
                <div class="col-4">
                    <h2>Alimentación</h2>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteFormularios extends Vue {

}
</script>
<style>
.background{
    background: white;
    height: 100vh;
    background-size: cover;
}
.imagenes{
    height: 250px;
}
</style>
