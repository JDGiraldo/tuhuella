<template>
    <div class="background">
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
      <div class="container navBar" >
        <div class="col-12 text-left" >
          <router-link to="/news" id="navbar" style="color: black;">Noticias |</router-link>
          <router-link to="/aire" id="navbar" style="color: black;"> Claidad del aire |
          </router-link>
        </div>
      </div>
          <div class="container" style="margin-top:40px;">
            <div class="row">
            <div class="col-6">
                 <h1>Deforestación: motor de emisión de dióxido de carbono en Colombia</h1>
                <p>El país emite al año un promedio de 237 millones de toneladas de gas
                  carbónico a la atmósfera.
              Las actividades en tierras forestales, incluida la tala de árboles, representan el 33%
                de la generación. Hoy, en el Día Mundial por la Reducción de las Emisiones de CO2,
                    les contamos cuáles son los sectores y departamentos que más emiten.</p>
            </div>
            <div class="col-6">
               <img src="./../assets/noticia2.jpg" alt="" width="400px">
            </div>
            </div>
               <div class="row">
            <div class="col-6">
                <img src="./../assets/noticia1.jpg" alt="" width="400px">
            </div>
            <div class="col-6">
                <h1>Cerca de 70 países se comprometieron a reducir su huella de carbono a cero</h1>
                <p>Un total de 66 países acordaron ante la ONU alcanzar la neutralidad de carbono
                  para el año 2050. Además, varios donantes decidieron desbloquear
                  cerca de 500 millones de dólares para reforestar la Amazonia y otras
                  selvas tropicales del mundo.</p>
            </div>
            </div>
               <div class="row">
            <div class="col-6">
                <h1>Huella de carbono para una gestión ambiental empresarial</h1>
                <p>Una información que permite a consumidores, clientes y proveedores
                   conocer el desempeño de la empresa en el manejo de los riesgos ambientales.</p>
            </div>
            <div class="col-6">
                <img src="./../assets/noticia3.jpg" alt="" width="400px">
            </div>
            </div>
             <div class="row">
            <div class="col-6">
               <img src="./../assets/noticia4.jpg" alt="" width="400px">
            </div>
            <div class="col-6">
                 <h1>Todo lo que debe saber sobre la primera “Carrera Verde” en Colombia</h1>
                <p>Se realizará el 22 de febrero, y por cada corredor
                  inscrito se sembrarán tres árboles.</p>
            </div>
            </div>
          </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponenteNews extends Vue {

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
