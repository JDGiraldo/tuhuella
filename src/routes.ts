// Definir rutas del aplicativo
import ComponenteHuella from './components/ComponenteHuella.vue';
import ComponenteNoticias from './components/ComponenteNoticias.vue';
import ComponenteHome from './components/ComponenteHome.vue';
import ComponenteLogin from './components/ComponenteLogin.vue';
import ComponenteRegyster from './components/ComponenteRegyster.vue';
import ComponenteFormularios from './components/ComponenteFormularios.vue';
import ComponenteFormularioEnergia from './components/ComponenteFormularioEnergia.vue';
import ComponenteMovi from './components/ComponenteMovi.vue';
import ComponenteAliment from './components/ComponenteAliment.vue';
import ComponenteNews from './components/ComponenteNews.vue';
import ComponenteAire from './components/ComponenteAire.vue';
import ComponenteHome2 from './components/ComponenteHome2.vue';

const routes = [
  { path: '/huella', component: ComponenteHuella },
  { path: '/noticias', component: ComponenteNoticias },
  { path: '/home', component: ComponenteHome },
  { path: '/login', component: ComponenteLogin },
  { path: '/regyster', component: ComponenteRegyster },
  { path: '/formularios', component: ComponenteFormularios },
  { path: '/energia', component: ComponenteFormularioEnergia },
  { path: '/movilizacion', component: ComponenteMovi },
  { path: '/aliment', component: ComponenteAliment },
  { path: '/news', component: ComponenteNews },
  { path: '/aire', component: ComponenteAire },
  { path: '/home2', component: ComponenteHome2 },
];

export default routes;
