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
      <div style="padding-top:40px;">
        <h1>Calidad del Aire</h1>
        <center>
       <iframe src="https://www.google.com/maps/embed?pb=Medell%C3%ADn,+Antioquia/@6.2686594,-75.6664441,12z/data=!4m5!3m4!1s0x8e4428ef4e52dddb:0x722fd6c39270ac72!8m2!3d6.2486069!4d-75.5742467" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </center>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class ComponenteAire extends Vue {
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
