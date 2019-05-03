<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="flex text-grey-14">
    <div id="q-app">
      <div class="q-pa-xl">
        <div class="row">
          <div class="col-lg-2 col-xs-12">
            <span class="row justify-center text-weight-bolder name text-black">Marcos</span>
            <span class="row justify-center text-weight-bolder secondName text-black">Valens</span>
            <div class="row q-pt-md">
              <p class="text-center text-weight-bold">Desarrollador y maquetador de aplicaciones web.</p>
            </div>
            <div class="col-12 q-pt-md">
              <q-bar class="bg-negative text-white">
                <q-icon name="my_location"></q-icon>
                <div class="col text-center text-weight-bold">Objetivo Profesional</div>
              </q-bar>
            </div>
            <div class="col-12 q-pt-md">
              <p class="text-justify">Mi deseo es adaptarme a las necesidades de la empresa y aprovechar la
                posibilidad de trabajar en su equipo, para crecer como profesional y dar lo mejor de mis cualidades.
                Mi preferencia esta en el lado 'Front-End, aunque puedo desarrollar cualquier aspecto de este campo.</p>
            </div>
            <div class="row desktop-only">
              <img
                src="../assets/fotocarnet.png"
              />
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
              <div class="flex col-12 justify-around q-pt-sm">
                <div clas="col-sm-4">
                  <q-avatar square>
                    <img  src="../assets/icons/Flag_Spain.svg" alt="Idioma Español">
                  </q-avatar>
                  <div class="flex justify-center"><q-rating
                    v-model="ratingSpanish"
                    :max="3"
                    color="orange"
                    readonly
                  /></div>
                  </div>
                <div>
                  <q-avatar square>
                    <img  src="../assets/icons/Flag_Catalonia.svg" alt="Idioma Catalan">
                  </q-avatar>
                  <div class="flex justify-center"><q-rating
                    v-model="ratingCatalan"
                    :max="3"
                    color="orange"
                    readonly
                  /></div>
                </div>
                <div>
                  <q-avatar square>
                    <img  src="../assets/icons/gb.svg" alt="Idioma Ingles">
                  </q-avatar>
                  <div class="flex justify-center"><q-rating
                    v-model="ratingEnglish"
                    :max="3"
                    color="orange"
                    readonly
                  /></div>
                </div>
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
          <div class="col-lg-10 col-xs-12 q-pl-lg">
            <q-bar class="bg-negative text-white">
              <q-icon name="book"></q-icon>
              <div class="col text-center text-weight-bold">Formación Academica</div>
            </q-bar>
            <h6 class="q-my-sm date">Septiembre 2017 - Actualidad <span class="text-negative">Desarrollo de aplicaciones web -
          Ciclo Formativo Grado Superior</span></h6>
            <h6 class="q-my-sm text-bold text-black">C.P. Es Liceu</h6>
            <p>La competencia general de este ciclo se vincula a el desarrollo, implementación y mantenimiento de
              sistemas informáticos, base de datos, programación, lenguaje de marcas y entornos de desarrollo.</p>
            <h6 class="q-my-sm date">Septiembre 2001 - Julio 2003 <span class="text-negative">Técnico en preimpresion digital -
              Ciclo Formativo Grado Superior</span></h6>
            <h6 class="q-my-sm text-bold text-black">I.E.S. Josep Maria Llompart</h6>
            <p>Las competencias trabajadas en este ciclo es el tratamiento de textos e imagen en mapa de bits,
              imposición y obtención digital de la forma impresora, compaginación identificacíon de materiales en
              preimpresión, ensablado de publicaciones electrónicas e ilustración vectorial</p>
            <q-bar class="bg-negative text-white">
              <q-icon name="laptop"></q-icon>
              <div class="col text-center text-weight-bold">Informática</div>
            </q-bar>
            <div class="row q-pa-sm">
              <div class="col-lg-1 col-sm-8 q-pa-lg flex items-center">
                <img src="../assets/icons/html5.svg"/>
              </div>
              <div class="col-lg-1 col-sm-8 q-pa-lg flex items-center">
                <img src="../assets/icons/css3.svg"/>
              </div>
              <div class="col-lg-1 col-sm-8 q-pa-lg flex items-center">
                <img src="../assets/icons/js6.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/Sass_Logo.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/vue.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/quasar.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/Npm-logo.svg"/>
              </div>
            </div>
            <div class="row q-pa-sm flex justify-around">
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/java_logo.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/mysql_logo.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/git_icon.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/apache-logo.svg"/>
              </div>
              <div class="col-lg-2 col-sm-4 q-pa-lg flex items-center">
                <img src="../assets/icons/tomcat_logo.svg"/>
              </div>
            </div>
            <div class="row flex items-center justify-around">
              <div class="col-lg-1 col-sm-3 q-pa-lg">
                <img src="../assets/icons/gulp.svg"/>
              </div>
              <div class="col-lg-3 col-sm-6 q-pa-lg">
                <img src="../assets/icons/Cordova-logo.svg"/>
              </div>
              <div class="col-lg-3 col-sm-6 q-pa-lg">
                <img src="../assets/icons/photoshop_logo.svg"/>
              </div>
              <div class="col-lg-3 col-sm-6 q-pa-lg">
                <img src="../assets/icons/illustrator.svg"/>
              </div>
            </div>
            <q-bar class="bg-negative text-white">
              <q-icon name="work"></q-icon>
              <div class="col text-center text-weight-bold">Experiencia Laboral</div>
            </q-bar>
            <div class="q-pa-md row justify-around q-gutter-md">
              <div class="col-lg-3 col-xs-12 q-ma-none q-pa-sm"><q-card class="my-card full-height">
                <img src="../assets/taxi.png">
                <q-card-section>
                  <div class="text-h6">Abril 2013 - Actualidad</div>
                  <div class="text-subtitle2 text-negative">Ajuntament de Palma</div>
                </q-card-section>
                <q-tabs v-model="tab"
                        dense
                        active-color="negative"
                        indicator-color="negative"
                        align="justify"
                        narrow-indicator>
                  <q-tab label="Cargos" name="one"/>
                  <q-tab label="Información" name="two"/>
                </q-tabs>
                <q-separator/>
                <q-tab-panels v-model="tab" animated>
                  <q-tab-panel name="one">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Transporte de clientes en la isla de Mallorca.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Capacidad de comunicación con el cliente.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                  <q-tab-panel name="two">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Solamente ejerzo este puesto durante las temporadas de verano.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>He trabajado con las tres radios disponibles en Palma: Taxis-Palma,
                                Radio-Taxi y Taxi-Telefono.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Aunque no tengo ningún problema con el horario, siempre he cubierto el turno
                                nocturno.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card></div>
              <div class="col-lg-3 col-xs-12 q-ma-none q-pa-sm"><q-card class="my-card full-height">
                <img src="../assets/inspeciónperiodica.png">
                <q-card-section>
                  <div class="text-h6">Marzo 2007 - Junio 2013</div>
                  <div class="text-subtitle2 text-negative">Activais</div>
                </q-card-section>
                <q-tabs v-model="tab1"
                        dense
                        active-color="negative"
                        indicator-color="negative"
                        align="justify"
                        narrow-indicator>
                  <q-tab label="Cargos" name="one"/>
                  <q-tab label="Información" name="two"/>
                </q-tabs>
                <q-separator/>
                <q-tab-panels v-model="tab1" animated>
                  <q-tab-panel name="one">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Pruebas de estanqueidad en instalaciones comunes e individuales.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Instalación de contadores de gas canalizado.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Pruebas de combustión de CO2 a aparatos de menos de 70Kw.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                  <q-tab-panel name="two">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>La empresa distribuidora de gas natural es Gesa Gas.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Activais era la empresa subcontratada por Gesa Gas</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card></div>
              <div class="col-lg-3 col-xs-12 q-ma-none q-pa-sm"><q-card class="my-card full-height">
                <img src="../assets/Son-San-Juan.png">
                <q-card-section>
                  <div class="text-h6">Octubre 2005 - Noviembre 2007</div>
                  <div class="text-subtitle2 text-negative">Fuerza Armada Española</div>
                </q-card-section>
                <q-tabs v-model="tab2"
                        dense
                        active-color="negative"
                        indicator-color="negative"
                        align="justify"
                        narrow-indicator>
                  <q-tab label="Cargos" name="one"/>
                  <q-tab label="Información" name="two"/>
                </q-tabs>
                <q-separator/>
                <q-tab-panels v-model="tab2" animated>
                  <q-tab-panel name="one">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Policía militar profesional en el ejercito de aire.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Función de guarda espaldas para altos mandos del ejercito español.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Rango: Soldado.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                  <q-tab-panel name="two">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Vigilancia de aviones de combate y helicopteros de salvamento.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Practicas de tiro con diferentes tipos de armas y munición.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card></div>
              <div class="col-lg-3 col-xs-12 q-ma-none q-pa-sm"><q-card class="my-card full-height">
                <img src="../assets/lacolumnata.png">
                <q-card-section>
                  <div class="text-h6">Septiembre 2003 - Septiembre 2005</div>
                  <div class="text-subtitle2 text-negative">La Columnata</div>
                </q-card-section>
                <q-tabs v-model="tab3"
                        dense
                        active-color="negative"
                        indicator-color="negative"
                        align="justify"
                        narrow-indicator>
                  <q-tab label="Cargos" name="one"/>
                  <q-tab label="Información" name="two"/>
                </q-tabs>
                <q-separator/>
                <q-tab-panels v-model="tab3" animated>
                  <q-tab-panel name="one">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Transporte de pedidos a domicilio.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Cocinero.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Encargado de local.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                  <q-tab-panel name="two">
                    <ul class="q-pa-none">
                      <q-list>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Equipo de cuatro personas al cargo. llevaba las cuentas del local y me
                                encargaba de hacer el inventario del local.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Encargado de la contabilidad del local al cargo.</q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                        <q-item clickable v-ripple>
                          <li>
                            <q-item-section>
                              <q-item-label>Encargado del inventario del local, asi como de hacer los pedidos a los
                                proveedores.
                              </q-item-label>
                            </q-item-section>
                          </li>
                        </q-item>
                      </q-list>
                    </ul>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  img {
    max-width: 100%;
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
        ratingEnglish: 2,
        tab: 'one',
        tab1: 'one',
        tab2: 'one',
        tab3: 'one',
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
