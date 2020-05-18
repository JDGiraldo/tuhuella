<template>
<div>
    <div class="d-flex navBar">
        <div class="col-6 text-left">
            <a class="textcolor" href="#">Home |</a>
            <a class="textcolor" href="#"> Tu Huella |</a>
            <a class="textcolor" href="#"> Noticias |</a>
        </div>
        <div class="col-6 text-right">
            <a class="textcolor" href="#">| Iniciar Sesion |</a>
            <a class="textcolor" href="#"> Registro |</a>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteTitulo extends Vue {}
</script>
<style>
.navBar{
    color: white;
    font-size: 25px;
    text-align: center;
    border-bottom: solid white;
    margin-left: 10px;
    margin-right: 40px;
    padding: 6px;
}
.textcolor{
    color:white;
}

</style>
