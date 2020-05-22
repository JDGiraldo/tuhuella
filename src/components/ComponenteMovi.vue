<template>
<div class="d-flex background">
    <div class="col-6 todo">
        <form action="1" class="formulario1">
            <h2>1.Kilometros recorridos:</h2>
            <p>Introduzca los kilometros recorridos en su desplazamiento.</p>
            <div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="Text" class="form-control" id="km" placeholder="KM">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">KM</label>
                </div>
            </div>
        </form>

        <form action="2" class="formularios">
            <h2>2.Numero de pasajeros:</h2>
            <p>Introduzca el numero de pasajeros del desplazamiento.</p>
            <div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="Text" class="form-control" id="km" placeholder="Pasajeros">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">Pasajeros</label>
                </div>
            </div>
        </form>

        <form action="3" class="formularios">
            <h2>3.Tipo de desplazamiento:</h2>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Indique el tipo de desplazamiento,
                    solo ida o ida y vuelta.</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option> Solo Ída</option>
                <option>Ída y vuelta</option>
                </select>
            </div>
        </form>

        <form action="4" class="formularios">
            <h2>4.Resultado:</h2>
            <p> El resultado del desplazamientoterrestree es de: 0 kg de CO2 eq.</p>
            <button type="button" class="btn btn-primary">Hacer otro calculo</button>
        </form>

        <form action="5" class="formularios">
            <h2>5.Total emisiones por desplazamiento terrestre:</h2>
            <p>Una vez calculado el desplazamiento aÒ·dalo al calculo total de emisiones.
                puede aÒadir uno o m·s desplazamientos al calculo general
            </p>
            <br>
            <p>¡un no se ha introducido ning˙n desplazamiento terrestre.</p>
            <button type="button" class="btn btn-success">Añadir al total</button>
        </form>

        <div class="col formularios">
            <h2>Resultado total:</h2>
            <p>La huella de carbono total es de 0 kg de CO2 (0 Tn CO2)</p>
            <div class="row col">
                <button type="button" class="btn btn-primary">Ver calculo general</button>
                <button type="button" class="btn btn-warning ml-3">Compensar</button>
            </div>
        </div>

    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteMovi extends Vue {

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
