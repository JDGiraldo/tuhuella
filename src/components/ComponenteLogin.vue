<template>
    <div>
        <div class="backgroud">

    <div class="limiter animated fadeInLeft">

        <div class="container-login100">
            <div class="wrap-login100 p-t-50 p-b-90 p-l-10 p-r-10">
                <div class="text-center">
                    <i class="fas fa-virus fa-spin fa-3x" style="color: #1a76a1;"></i> <br> <br>
                </div>
                <form class="login100-form validate-form flex-sb flex-w">

                    <span class="login100-form-title p-b-51">
                        INICIAR SESIÓN
                    </span>

                    <span class="text-danger">El correo es
                        obligatorio</span>
                    <div class="wrap-input100 m-b-16">
             <input class="input100" type="email" name="email" placeholder="Correo electrónico"
                             required minlength="2">

                        <span class="focus-input100"></span>
                    </div>

                    <span  class="text-danger">La contraseña debe de ser
                        más de 6 caracteres</span>
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
                        <router-link to="/regyster" id="navbar">
                            <a class="txt1" style="color:black;">
                                ¿No tienes cuenta?
                            </a>
                            </router-link>
                        </div>
                    </div>

                    <div v-if="registro" class="container-login100-form-btn m-t-17">
                        <router-link to="/home">
                        <button class="login100-form-btn" type="submit">
                            Ingresar
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

@Component
export default class ComponenteLogin extends Vue {
email='admin@admin.com';

password ='123456';

registro =false;

constructor() {
  super();

  if (this.email === 'admin@admin.com' && this.password === '123456') {
    this.registro = true;
  }
}
}
</script>
<style>
.backgroud{
background-image: url("./../assets/boy.jpg");
 height: 100%;
  margin: auto;
  display: block;
  background-size: cover;
}
</style>
