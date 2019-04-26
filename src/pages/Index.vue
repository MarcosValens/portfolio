<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="flex text-grey-14">
    <div id="q-app">
      <div class="q-pa-xl">
        <div class="row">
          <div class="col-2">
            <span class="row col-12 justify-center text-weight-bolder name text-black">Marcos</span>
            <span class="row col-12 justify-center text-weight-bolder secondName text-black">Valens</span>
            <div class="row q-pt-md col-12">
              <p class="text-center text-weight-bold">Desarrollador y maquetador de aplicaciones</p>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-negative text-white">
                <q-icon name="my_location"></q-icon>
                <div class="col text-center text-weight-bold">Objetivo Profesional</div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md">
              <p class="text-justify">Mi deseo es adaptarme a las necesidades de la empresa y aprovechar la
                posibilidad de
                trabajar en su equipo,
                para crecer como profesional y dar lo mejor de mis cualidades. Mi preferencia esta en el lado
                'Front-End,
                aunque puedo desarrollar cualquier aspecto de este campo.</p>
            </div>
            <div class="row">
              <div class="q-pt-md">
                <q-avatar rounded size="14vw"><img src="../assets/fotocarnet.png" alt="fotoCarnet"></q-avatar>
              </div>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-negative text-white">
                <q-icon name="face"></q-icon>
                <div class="col text-center text-weight-bold">Información Personal</div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-white">
                <q-icon name="insert_invitation"></q-icon>
                <div class="col">16 de septiembre de 1985</div>
              </q-bar>
            </div>
            <div class="col-12">
              <q-bar class="bg-white">
                <q-icon name="person_pin_circle"></q-icon>
                <div class="col">Son Ferriol, Palma</div>
              </q-bar>
            </div>
            <div class="row">
              <div class="col-12">
                <q-bar class="bg-white">
                  <q-icon name="directions_car"></q-icon>
                  <div class="col">A1 - B - BTP</div>
                </q-bar>
              </div>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-negative text-white">
                <q-icon name="email"></q-icon>
                <div class="col text-center text-weight-bold">Contacto</div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-white">
                <q-icon name="phone"></q-icon>
                <div class="col"><a href="tel:+34 685 348 612">+34 685 348 612</a></div>
              </q-bar>
            </div>
            <div class="col-12">
              <q-bar class="bg-white">
                <q-icon name="alternate_email"></q-icon>
                <div class="col"><a href="mailto:marcosvalens@gmail.com">marcosvalens@gmail.com</a></div>
              </q-bar>
            </div>
            <div class="col-12">
              <q-bar class="bg-white">
                <q-icon name="ion-logo-github"></q-icon>
                <div class="col"><a href="https://github.com/marcosvalens">github.com/marcosvalens</a></div>
              </q-bar>
            </div>
            <div class="col-12">
              <q-bar class="bg-white">
                <q-icon name="ion-logo-linkedin"></q-icon>
                <div class="col"><a href="https://www.linkedin.com/in/marcosvalens/">linkedin.com/in/marcosvalens</a>
                </div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-negative text-white">
                <q-icon name="timeline"></q-icon>
                <div class="col text-center text-weight-bold">Competencias</div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md" @mouseover="start" @mouseleave="restart">
              <q-bar class="bg-white">
                <q-icon name="devices"></q-icon>
                <div class="col">Front-End</div>
              </q-bar>
              <q-linear-progress :value="progress" color="positive" class="q-mt-sm"/>
            </div>
            <div class="col-12 q-pt-md" @mouseover="startBack" @mouseleave="restartBack">
              <q-bar class="bg-white">
                <q-icon name="storage"></q-icon>
                <div class="col">Back-End</div>
              </q-bar>
              <q-linear-progress :value="progress1" color="warning" class="q-mt-sm"/>
            </div>
            <div class="col-12 q-pt-lg">
              <q-bar class="bg-negative text-white">
                <q-icon name="mode_comment"></q-icon>
                <div class="col text-center text-weight-bold">Idiomas</div>
              </q-bar>
            </div>
            <div class="row">
              <div class="flex col-12 justify-center q-pt-sm">
                <q-avatar square size="4vw"><img class="col-8" src="../assets/icons/Flag_Spain.svg"
                                                 alt="Idioma Catalan">
                  <q-rating
                    class="justify-center"
                    v-model="ratingSpanish"
                    size="1vw"
                    :max="3"
                    color="orange"
                    readonly
                  />
                </q-avatar>
                <q-avatar square size="4vw"><img class="col-8" src="../assets/icons/Flag_Catalonia.svg"
                                                 alt="Idioma Español">
                  <q-rating
                    class="justify-center"
                    v-model="ratingCatalan"
                    size="1vw"
                    :max="3"
                    color="orange"
                    readonly
                  />
                </q-avatar>
                <q-avatar square size="4vw"><img class="col-8" src="../assets/icons/gb.svg" alt="Idioma Ingles">
                  <q-rating
                    class="justify-center"
                    v-model="ratingEnglish"
                    size="1vw"
                    :max="3"
                    color="orange"
                    readonly
                  />
                </q-avatar>
              </div>
            </div>
            <div class="col-12 q-pt-lg">
              <q-bar class="bg-negative text-white">
                <q-icon name="add_circle_outline"></q-icon>
                <div class="col text-center text-weight-bold">Otras Competencias</div>
              </q-bar>
            </div>
            <div class="q-pa-md col-12">
              <q-list dense class="rounded-borders">
                <ul class="q-pa-none">
                  <q-item clickable v-ripple>
                    <li class="text-justify">
                      <span class="text-weight-bold">Primeros auxilios:</span>
                      <p>Cerificado de Primeros Auxilios certificado por la Cruz Roja (25
                        horas - 2004)</p>
                    </li>
                  </q-item>
                  <q-item clickable v-ripple>
                    <li class="text-justify">
                      <span class="text-weight-bold">Curso de prevención de reisgos laborales:</span>
                      <p>Certificado por la academia Fomento Profesional (25 horas - 2014)</p>
                    </li>
                  </q-item>
                  <q-item clickable v-ripple>
                    <li class="text-justify">
                      <span class="text-weight-bold">Curso técnico instalador de energías renovables:</span>
                      <p>Cerificado por la academa Fomento Profesional
                        (800 horas - 2012)</p>
                    </li>
                  </q-item>
                  <q-item clickable v-ripple>
                    <li class="text-justify">
                      <span class="text-weight-bold">Curso de gas canalizado y altas de nuevo suministro:</span>
                      <p>Cerificado por la empresa Activais (50 horas - 2012)</p>
                    </li>
                  </q-item>
                </ul>
              </q-list>
            </div>
          </div>
          <div class="col-10">
            <q-bar class="bg-negative text-white">
              <q-icon name="book"></q-icon>
              <div class="col text-center text-weight-bold">Formación Academica</div>
            </q-bar>
            <h6 class="q-mt-sm date">Septiembre 2017 - Actualidad <span class="text-secondary">Desarrollo de aplicaciones web -
          Ciclo Formativo Grado Superior</span></h6>
            <h6 class="q-mt-sm text-bold text-black">C.P. Es Liceu</h6>
            <p>La competencia general de este ciclo se vincula a el desarrollo, implementación y mantenimiento de
              sistemas
              informáticos, base de datos, programación, lenguaje de marcas y entornos de desarrollo</p>
            <h6 class="q-mt-sm date">Septiembre 2001 - Julio 2003 <span class="work">Técnico en preimpresion digital -
          Ciclo Formativo Grado Superior</span></h6>
            <h6 class="q-mt-sm text-bold text-black">I.E.S. Josep Maria Llompart</h6>
            <p>Las competencias trabajadas en este ciclo es el tratamiento de textos e imagen en mapa de bits,
              imposición y obtención digital de la forma impresora, compaginación identificacíon de materiales en
              preimpresión, ensablado de publicaciones electrónicas e ilustración vectorial</p>
          </div>
        </div>
      </div>
    </div>


    <!--

      <div class="col-7" style="height: 13%">
        <h6 class="q-mt-sm date">Septiembre 2017 - Actualidad <span class="work">Desarrollo de aplicaciones web -
          Ciclo Formativo Grado Superior</span></h6>
        <h6 class="q-mt-sm text-bold text-black">C.P. Es Liceu</h6>
        <p>La competencia general de este ciclo se vincula a el desarrollo, implementación y mantenimiento de sistemas
          informáticos, base de datos, programación, lenguaje de marcas y entornos de desarrollo</p>
        <h6 class="q-mt-sm date">Septiembre 2001 - Julio 2003 <span class="work">Técnico en preimpresion digital -
          Ciclo Formativo Grado Superior</span></h6>
        <h6 class="q-mt-sm text-bold text-black">I.E.S. Josep Maria Llompart</h6>
        <p>Las competencias trabajadas en este ciclo es el tratamiento de textos e imagen en mapa de bits,
          imposición y obtención digital de la forma impresora, compaginación identificacíon de materiales en
          preimpresión, ensablado de publicaciones electrónicas e ilustración vectorial</p>
      </div>


      <div class="title q-mb-md row col-12" style="height: 1%">
        <div class="row col-12" style="height: 100%"><img class="q-ml-sm q-mr-lg row" style="height: 100%"
                                                          src="../assets/icons/computer_logo.svg"
                                                          alt="logo informatica">
          <span class="q-mt-xs col-7">Informática</span></div>
      </div>

      <div class="q-mb-md row col-8 items-start content-start justify-between" style="height: 26%">
        <img src="../assets/icons/html5-css3-javascript-logos.svg" class="col-3 q-mr-lg" alt="logos html-css-js">
        <img src="../assets/icons/jquery-logo.svg" class="col-1" alt="logo jquery">
        <img src="../assets/icons/vue_icon.svg" class="col-1 q-mr-lg" alt="logo vuejs">
        <img src="../assets/icons/quasar_icon.svg" class="col-1 q-mr-lg" alt="logo quasar">
        <img src="../assets/icons/Npm-logo.svg" class="col-2 q-mr-lg" alt="logo npm">
        <img src="../assets/icons/java_logo.svg" class="col-1 q-mr-xl" alt="logo java">
        <img src="../assets/icons/mysql_logo.svg" class="col-2 q-mr-lg" alt="logo mysql">
        <img src="../assets/icons/webpack-logo.svg" class="col-2 q-mr-lg" alt="logo webpack">
        <img src="../assets/icons/git_icon.svg" class="col-2 q-mr-lg" alt="logo git">
        <img src="../assets/icons/apache-logo.svg" class="col-2 q-mr-lg" alt="logo apache">
        <img src="../assets/icons/tomcat_logo.svg" class="col-2 q-mr-lg" alt="logo Tomcat">
        <img src="../assets/icons/Cordova-logo.svg" class="col-3 q-mr-xl" alt="logo Cordova">
        <img src="../assets/icons/photoshop_logo.svg" class="col-3 q-mr-xl" alt="logo photshop">
        <img src="../assets/icons/illustrator.svg" class="col-3 q-mr-xl" alt="logo illustrator">
        <img src="../assets/icons/gulp_logo.svg" class="col-1 q-mr-lg" alt="logo gulp">
      </div>
      <div class="title q-mb-md row col-12" style="height: 1%">
        <div class="row col-12" style="height: 100%"><img class="q-ml-sm q-mr-lg row" style="height: 100%"
                                                          src="../assets/icons/computer_logo.svg"
                                                          alt="logo informatica">
          <span class="q-mt-xs col-7">Experiencia Laboral</span></div>
      </div>

      <div class="col-7" style="height: 20%">
        <h6 class="q-mt-sm date">Abril 2013 - Actualidad (Temporadas de verano) <span class="work"> Chofer</span></h6>
        <h6 class="q-mt-sm text-bold text-black">Taxi Palma</h6>
        <ul>
          <li>Transporte de clientes en la isla de Mallorca.</li>
          <li>Capacidad de comunicacion con el cliente.</li>
        </ul>
        <h6 class="q-mt-xl date">Marzo 2007 - Junio 2013 <span class="work"> Inspector de instalaciones de gas
          canalizado e instalador de contadores de gas canalizado</span></h6>
        <h6 class="q-mt-sm text-bold text-black">Activais</h6>
        <ul>
          <li>Pruebas de estanqueidad en instalaciones comunes e individuales.</li>
          <li>Instalación de contadores de gas canalizado</li>
          <li>Pruebas de combustión de CO2 a aparatos de fas con menos de 70 Kw</li>
        </ul>
        <h6 class="q-mt-xl date">Octubre 2005 - Noviembre 2007 <span class="work"> Policía militar profesional en el ejercito de aire </span></h6>
        <h6 class="q-mt-sm text-bold text-black">Fuerza Armada Española</h6>
        <ul>
          <li>Vigilancia sobre la base aérea española de Sont Sant Joan</li>
          <li>Función de guarda espaldas para altos mandos del ejercito español</li>
          <li>Rango Soldado</li>
        </ul>
        <h6 class="q-mt-xl date">Septiembre 2003 - Septiembre 2005 <span class="work"> Encargado de pizzeria </span></h6>
        <h6 class="q-mt-sm text-bold text-black">La Columnata</h6>
        <ul>
          <li>Transporte de pedidos a domicilio</li>
          <li>Cocinero</li>
          <li>Encargado de local con 4 personas al cargo</li>
        </ul>
      </div>

    </div>-->
    <!--</div>-->


  </q-page>
</template>

<style>
  .name {
    font-size: 50px;
  }

  .secondName {
    font-size: 50px;
    border-bottom: solid black 7px;
  }

  a:link {
    color: #5e5e5e;
    text-decoration: none;
  }

  a:visited {
    color: #5e5e5e;
  }

  a:hover {
    color: cornflowerblue;
  }
</style>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        progress: 0.0,
        progress1: 0.0,
        ratingSpanish: 3,
        ratingCatalan: 3,
        ratingEnglish: 2
      }
    },
    methods: {
      start() {
        this.progress = 0.8
      },
      restart() {
        this.progress = 0.0
      },
      startBack() {
        this.progress1 = 0.5
      },
      restartBack() {
        this.progress1 = 0.0
      }
    }
  }
</script>
