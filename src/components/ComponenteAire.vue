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
          <router-link to="/aire" id="navbar" style="color: black;"> Calidad del aire |
          </router-link>
        </div>
      </div>
      <div style="padding-top:40px;">
        <h1>Calidad del Aire</h1>
        <center>
       <iframe src="https://www.google.com/maps/embed?pb=@6.229006,-75.583473,22922m/data=!3m1!1e3?hl=es-CO" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
