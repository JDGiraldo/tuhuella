<template>
  <div class="d-flex background">
    <div class="col-6 todo">
        <form action="1" class="formulario1">
            <h2>1.Tipo de alimentaciÛn:</h2>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">
                    Dieta media EspaÒa</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">
                    Dieta mediterr·nea</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadio3">
                    Dieta vegetariana</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio4" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadio4">
                    Dieta vegana</label>
            </div>
        </form>

        <form action="2" class="formularios">
            <h2>2.Procedencia de 80% de los alimentos que consumes:</h2>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadioo1" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadioo1">
                    Km0</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadioo2" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadioo2">
                    Nacional</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadioo3" name="customRadio"
                class="custom-control-input">
                <label class="custom-control-label" for="customRadioo3">
                    Internacional</label>
            </div>
        </form>

        <form action="3" class="formularios">
            <h2>3.øEl 80% de los alimentos que consumes son ecologicos?</h2>
            <div class="custom-control custom-switch col d-flex">
                <label class="col-2">SI</label>
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label col" for="customSwitch1">NO</label>
            </div>
            <br>
            <p class="font-italic">NOTA: por definiciÛn los alimentos de km0 son
                ecolÛgicos, por lo quela opciÛn km0 + no ecolÛgico no se contempla</p>

        </form>

        <form action="4" class="formularios">
            <h2>4.Resultado:</h2>
            <p>El resultado de su consumo alimentario anual es de: 0 kg de CO2 eq</p>
            <br>
            <p>Se corresponde con una huella diaria de: 0 kg de CO2 eq</p>
            <button type="button" class="btn btn-primary">Hacer otro calculo</button>
            <br>
            <br>
            <p>Una vez calculadas las emisiones por consumo en alimentaciÛn, aÒadalas
                al calculo total de emiciones.
            </p>
            <br>
            <p>No hay consuo en alimentaciÛn en el c·lculo.</p>
            <button type="button" class="btn btn-success">AÒadir al total</button>
            <br>
            <br>
            <h2>Resultado total:</h2>
            <p>La huella de carbono total es de 0 kg de CO2 (0 Tn CO2)</p>
            <div class="row col">
                <button type="button" class="btn btn-primary">Ver calculo general</button>
                <button type="button" class="btn btn-warning ml-3">Compensar</button>
            </div>
        </form>

    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteAliment extends Vue {

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
