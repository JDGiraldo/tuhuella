<template>
    <div>
<div class="backgroud">
    <div class="limiter animated fadeInRight">
        <div class="container-login100">
            <div class="wrap-login100 p-t-50 p-b-90 p-l-10 p-r-10">
                <div class="text-center">
                    <i class="fas fa-virus fa-spin fa-3x" style="color: #281aa1;"></i> <br> <br>
                </div>
                <form class="login100-form validate-form flex-sb flex-w">

                    <span class="login100-form-title p-b-51">
                        Registrarse
                    </span>

                    <span class="text-danger animated fadeIn">El
                        nombre
                        es obligatorio</span>
                    <div class="wrap-input100 m-b-16">
                     <input class="input100" type="text" name="nombre" placeholder="Nombre Completo"
                             required minlength="2">

                        <span class="focus-input100"></span>
                    </div>

                    <span  class="text-danger animated fadeIn">El
                        nombre
                        es obligatorio</span>
                    <div class="wrap-input100 m-b-16">
                        <input class="input100" type="date" name="date"
                            required minlength="2">

                        <span class="focus-input100"></span>
                    </div>

                    <span class="text-danger animated fadeIn">El
                        correo es
                        obligatorio</span>
                    <div class="wrap-input100 m-b-16">
                <input class="input100" type="email" name="email" placeholder="Correo electrónico"
                             required email>

                        <span class="focus-input100"></span>
                    </div>

                    <span  class="text-danger animated fadeIn">La
                        contraseña
                        debe contener al menos 6 caracteres</span>
                    <div class="wrap-input100 m-b-16" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Contraseña"
                             required minlength="6">
                        <span class="focus-input100"></span>
                    </div>

                    <div class="flex-sb-m w-full p-t-3 p-b-24">
                        <div class="contact100-form-checkbox">
                            <input  class="input-checkbox100" id="ckb1" type="checkbox"
                                name="remember-me">
                            <label class="label-checkbox100" for="ckb1">
                                Recordar mi usuario
                            </label>
                        </div>

                        <div>
                            <a routerLink="/logIn" class="txt1">
                                ¿Ya tienes cuenta? / Ingresar
                            </a>
                        </div>
                    </div>

                    <div class="container-login100-form-btn m-t-17">
                          <router-link to="/login">
                        <button @click="register" class="login100-form-btn" type="submit">
                            Crear cuenta
                        </button>
                          </router-link>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>

    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';

@Component
export default class ComponenteRegyster extends Vue {
}
</script>
<style>
.backgroud{
background-image: url("./../assets/boy.jpg");
 height: 100%;
  margin: auto;
  display: block;
  background-size: 200%;
  animation: movimiento 10s infinite linear alternate;
}
@keyframes movimiento {
    from{
        background-position: bottom left;
    }to{
        background-position: top right;
    }
}

</style>
