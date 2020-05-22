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
          <div class="container">
            <div class="row">
            <div class="col-6">
                <img src="" alt="">
            </div>
            <div class="col-6">
                <h1>Deforestación: motor de emisión de dióxido de carbono en Colombia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
                non pulvinar lorem felis nec erat</p>
            </div>
            </div>
               <div class="row">
            <div class="col-6">
                <img src="" alt="">
            </div>
            <div class="col-6">
                <h1>Deforestación: motor de emisión de dióxido de carbono en Colombia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
                non pulvinar lorem felis nec erat</p>
            </div>
            </div>
               <div class="row">
            <div class="col-6">
                <img src="" alt="">
            </div>
            <div class="col-6">
                <h1>Deforestación: motor de emisión de dióxido de carbono en Colombia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
                non pulvinar lorem felis nec erat</p>
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
