<template>
  <div class="d-flex background">
    <div class="col-8 todo">

        <form action="1" class="formularios">
            <h2>1.Consumo eléctrico:</h2>
            <p>Introduzca el numero de electricidad (en kWh.).</p>
            <div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="Text" class="form-control" id="km" placeholder="kWh">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">kWh</label>
                </div>
            </div>
            <p>¿Tienes energía contratada?</p>
            <div class="custom-control custom-switch col d-flex">
                <label class="col-2">SI </label>
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label col" for="customSwitch1">NO</label>
            </div>
        </form>

        <form action="2" class="formularios">
            <h2>2.Resultado</h2>
            <p>El resultado de su Consumo eléctrico es de: 0 kg de C02:
            </p>
            <br>
            <button type="button" class="btn btn-info">Hacer otro calculo</button>
        </form>

        <form action="3" class="formularios">
            <h2>3.Total emisiones por consumo eléctrico:</h2>
            <p> Una vez calculas las emisiones por consumo eléctrico,añádalas al cálculos
                total de emisiones.</p>
               <p> No hay consumo eléctrico en el cálculo.</p>
           <button type="button" class="btn btn-primary">Hacer otro calculo</button>
        </form>

        <div class="col formularios">
            <h2>Resultado total:</h2>
            <p>La huella de carbono total es de 0 kg de CO2 (0 Tn CO2)</p>
            <div class="row col">
                <button type="button" class="btn btn-success">Ver calculo general</button>
                <button type="button" class="btn btn-warning ml-3">Compensar</button>
            </div>
        </div>

    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteFormularioEnergia extends Vue {

}
</script>
<style>
.background{
    background: white;
    height: 100vh;
    background-size: cover;
    text-align: start;
    margin-top:5px;
    padding: 80px;
}
</style>
