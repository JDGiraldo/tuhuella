<template>
<div>
    <div class="row">
         <div class="col-4 textcolor">
        <a>Juan Diego Giraldo</a><br>
        <a>Felipe Muñoz Gomez</a><br>
        <a>Nicolas Restrepo Gomez</a>
    </div>
    <div class="col-4 textcolor">
        ®Copyright 2020
    </div>
    <div class="col-4 textcolor">
        <a>Todos los derechos reservados</a><br>
        <a>Términos y condiciones</a>
    </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteFooter extends Vue {

}
</script>
<style>
.textcolor{
    color: white;
}
</style>
