<template>
  <div class="background" style="margin-top:5px">
    <h1>¿Qué es Tu Huella?</h1>
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active tamanoimagen" data-interval="10000">
            <img src="assets/Slider1.jpg"
            class="d-block" alt="..." />
          </div>
          <div class="carousel-item tamanoimagen" data-interval="2000">
            <img src="assets/Slider2.jpg"
            class="d-block" alt="..." />
          </div>
          <div class="carousel-item tamanoimagen">
            <img src="assets/Slider3.jpg"
            class="d-block" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class=" col d-flex info">
    <div class=" col-3">
        <img src="assets/unnamed.jpg" alt="huella" class=" col align-self-start">
    </div>
    <div class="  align-self-end">
        <h2 class="parrafo">Como se emite el CO2</h2>
        <p class="parrafos m-4"> Como cualquier otro día,suena la alarma,se para de la cama,
            va al baño,prende la luz
         y abre la llave de la ducha. Mas tarde, se dirige a la cocina y prende la estufa para
         preparar de afan su desayuno antes de salir a coger su carro o un bus y
         llegar asi a su trabajo. Entre tanto,se lavo los dientes, cargo su celular
         y escucho la radio.</p>
        <p class="parrafos m-4"> Esta es una pequeña lista de las acciones cotidianas que puede
             realizar
            cualquier colombiano
         en apenas unos minutos y que contribuyen a la emision de dioxido de carbono </p>
    </div>
</div>
<div class=" col d-flex info">
    <div class=" parra2 align-self-start">
        <h2 class="parrafo2">Tu Huella</h2>
        <p class="parrafos2 m-4"> Tu Huella nacio como una solucion para mitigar el incremento
            de CO2 en la atmosfera
            ,con su innovadora manera de ayudar  a las personas en sus rutinas diarias y
             darles consejos
            para su diario vivir fomentando el cuidado del medio ambiente
        </p>
        <p class="parrafos2 m-4"> El ser humano de por si genera CO2 a la atmosfera,segun
            estudios
             un colombiano
            genera 4 toneladas al año del mismo quimico.Esto a la larga afecta mucho
            el ambiente y deteriora el ecosistema global
             </p>
    </div>
</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteHuella extends Vue {}
</script>
<style>
.background {
  background: white;
}
.parrafo {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: black;
  border-bottom: solid black;
  margin-left: 10px;
  margin-right: 40px;
  padding: 6px;
  font-size: x-large;
  text-align: left;
  margin-top: 30px;
}
.parrafos {
  text-align: left;
}
.tamanoimagen{
width: 100px;
height: 300px;
background-size: cover;
}

</style>
