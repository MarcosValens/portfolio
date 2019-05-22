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
            <div class="col-12 q-pt-md" v-for="info in information">
              <q-bar class="bg-negative text-white">
                <q-icon :name="info.icon"></q-icon>
                <div class="col text-center text-weight-bold">{{info.title}}</div>
              </q-bar>
              <div class="row desktop-only" v-if="info.imgToogle">
                <img :src="info.url" :alt="info.alt"/>
              </div>
              <div class="col-12 q-pt-md">
                <p class="text-justify" v-if="info.textToogle">{{info.text}}</p>
                <q-bar class="bg-white" v-for="point in info.points" v-if="info.listToogle">
                  <q-icon :name="point.icon"></q-icon>
                  <div class="col">{{point.text}}</div>
                </q-bar>
                <q-bar class="bg-white" v-for="point in info.points" v-if="info.linkToogle">
                  <q-icon :name="point.icon"></q-icon>
                  <div class="col"><a :href="point.direction">{{point.text}}</a></div>
                </q-bar>
              </div>
              <div class="col-12 q-pt-md" @mouseover="start" @mouseleave="restart" v-if="info.methodToogle">
                <q-bar class="bg-white">
                  <q-icon name="devices"></q-icon>
                  <div class="col">Front-End</div>
                </q-bar>
                <q-linear-progress :value="progress" color="positive" class="q-mt-sm"/>
              </div>
              <div class="col-12 q-pt-md" @mouseover="startBack" @mouseleave="restartBack" v-if="info.methodToogle">
                <q-bar class="bg-white">
                  <q-icon name="storage"></q-icon>
                  <div class="col">Back-End</div>
                </q-bar>
                <q-linear-progress :value="progress1" color="warning" class="q-mt-sm"/>
              </div>
              <div class="row" v-if="info.lenguageToogle">
                <div class="flex col-12 justify-around q-pt-sm">
                  <div clas="col-sm-4" v-for="point in info.points">
                    <q-avatar square>
                      <img :src="point.url" :alt="point.alt">
                    </q-avatar>
                    <div class="flex justify-center">
                      <q-rating
                        v-if="!point.englishToogle"
                        v-model="ratingSpanish"
                        :max="3"
                        color="orange"
                        readonly
                      />
                      <div class="flex justify-center" v-if="point.englishToogle">
                        <q-rating
                          v-model="ratingEnglish"
                          :max="3"
                          color="orange"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <q-list dense class="rounded-borders" v-if="info.competenciasToogle">
                <ul class="q-pa-none">
                  <q-item clickable v-ripple v-for="point in info.points">
                    <li class="text-justify">
                      <span class="text-weight-bold">{{point.bold}}</span>
                      <p>{{point.text}}</p>
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
              <div v-for="image in images8" class="col-lg-1 col-sm-8 q-pa-lg flex items-center justify-around">
                <img :src="image.url" :alt="image.alt"/>
              </div>

              <div v-for="image in images4" class="col-lg-2 col-sm-4 q-pa-lg flex items-center justify-around">
                <img :src="image.url" :alt="image.alt"/>
              </div>

              <div v-for="image in images6" class="col-lg-3 col-sm-6 q-pa-lg flex items-center justify-around">
                <img :src="image.url" :alt="image.alt"/>
              </div>
              <div class="col-lg-1 col-sm-3 q-pa-lg">
                <img src="../assets/icons/gulp.svg"/>
              </div>
            </div>
            <q-bar class="bg-negative text-white">
              <q-icon name="work"></q-icon>
              <div class="col text-center text-weight-bold">Experiencia Laboral</div>
            </q-bar>

            <div class="q-pa-md row justify-around q-gutter-md">
              <div class="col-lg-3 col-xs-12 q-ma-none q-pa-sm" v-for="work in works">
                <q-card class="my-card full-height">
                  <img :src="work.url">
                  <q-card-section>
                    <div class="text-h6">{{work.date}}</div>
                    <div class="text-subtitle2 text-negative">{{work.company}}</div>
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
                          <q-item clickable v-ripple v-for="cargo in work.cargos">
                            <li>
                              <q-item-section>
                                <q-item-label>{{cargo}}</q-item-label>
                              </q-item-section>
                            </li>
                          </q-item>
                        </q-list>
                      </ul>
                    </q-tab-panel>
                    <q-tab-panel name="two">
                      <ul class="q-pa-none">
                        <q-list>
                          <q-item clickable v-ripple v-for="advice in work.advices">
                            <li>
                              <q-item-section>
                                <q-item-label>{{advice}}</q-item-label>
                              </q-item-section>
                            </li>
                          </q-item>
                        </q-list>
                      </ul>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
              </div>
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
        images8: [
          {url: '../../assets/icons/html5.svg', alt: 'html logo'},
          {url: '../../assets/icons/css3.svg', alt: 'CSS3 logo'},
          {url: '../../assets/icons/js6.svg', alt: 'JavaScript Logo'},
        ],
        images4: [
          {url: '../../assets/icons/Sass_Logo.svg', alt: 'Sass Logo'},
          {url: '../../assets/icons/vue.svg', alt: 'Vue Logo'},
          {url: '../../assets/icons/jquery-logo.svg', alt: 'JQuery Logo'},
          {url: '../../assets/icons/Npm-logo.svg', alt: 'NPM Logo'},
          {url: '../../assets/icons/java_logo.svg', alt: 'Java Logo'},
          {url: '../../assets/icons/mysql_logo.svg', alt: 'MySql Logo'},
          {url: '../../assets/icons/git_icon.svg', alt: 'Git Logo'},
          {url: '../../assets/icons/apache-logo.svg', alt: 'Apache Logo'},
          {url: '../../assets/icons/tomcat_logo.svg', alt: 'Tomcat Logo'},
        ],
        images6: [
          {url: '../../assets/icons/Cordova-logo.svg', alt: 'Cordova Logo'},
          {url: '../../assets/icons/photoshop_logo.svg', alt: 'Pthotoshop Logo'},
          {url: '../../assets/icons/illustrator.svg', alt: 'Illustrator Logo'}
        ],
        works: [
          {
            url: '../../assets/taxi.png', date: 'Abril 2013 - Actualidad', company: 'Ajuntament de Palma',
            cargos: ['Transporte de clientes por la isla de Mallorca', 'Capacidad de comunicación con el cliente.'],
            advices: [
              'Solamente ejerzo este puesto durante las temporadas de verano.',
              'He trabajado con las tres radios disponibles en Palma: Taxis-Palma, Radio-Taxi y Taxi-Telefono.',
              'Aunque no tengo ningún problema con el horario, siempre he cubierto el turno nocturno.',
            ]
          },
          {
            url: '../../assets/gas.png', date: 'Abril 2013 - Actualidad', company: 'Activais',
            cargos: ['Pruebas de estanqueidad en instalaciones comunes e individuales.',
              'Instalación de contadores de gas canalizado.', 'Pruebas de combustión de CO2 a aparatos de menos de 70Kw.'],
            advices: [
              'La empresa distribuidora de gas natural es Gesa Gas.',
              'Activais era la empresa subcontratada por Gesa Gas.',
            ]
          },
          {
            url: '../../assets/Son-San-Juan.png',
            date: 'Octubre 2005 - Noviembre 2007',
            company: 'Fuerza Armada Española',
            cargos: ['Policía militar profesional en el ejercito de aire.',
              'Función de guarda espaldas para altos mandos del ejercito español.', 'Rango: Soldado.'],
            advices: [
              'Vigilancia de aviones de combate y helicopteros de salvamento.',
              'Practicas de tiro con diferentes tipos de armas y munición.',
            ]
          },
          {
            url: '../../assets/lacolumnata.png', date: 'Septiembre 2003 - Septiembre 2005', company: 'La Columnata',
            cargos: ['Transporte de pedidos a domicilio.',
              'Cocinero.', 'Encargado de local.'],
            advices: [
              'Equipo de cuatro personas al cargo. llevaba las cuentas del local y me encargaba de hacer el inventario del local.',
              'Encargado de la contabilidad del local al cargo.', 'Encargado del inventario del local, asi como de hacer los pedidos a los proveedores.'
            ]
          },
        ],
        information: [
          {
            icon: 'my_location', title: 'Objetivo Profesional',
            text: 'Mi deseo es adaptarme a las necesidades de la empresa y aprovechar la posibilidad de trabajar en su ' +
              'equipo, para crecer como profesional y dar lo mejor de mis cualidades. Mi preferencia esta en el lado ' +
              '\'Front-End\', aunque puedo desarrollar cualquier aspecto de este campo.',
            url: '../assets/fotocarnet.png',
            alt: 'Foto Marcos Valens',
            textToogle: true,
            imgToogle: true,
            listToogle: false,
            linkToogle: false,
            methodToogle: false,
            lenguageToogle: false,
          },
          {
            icon: 'face',
            title: 'Información Personal',
            points: [
              {icon: 'insert_invitation', text: '16 de septiembre de 1985'},
              {icon: 'person_pin_circle', text: 'Son Ferriol, Palma'},
              {icon: 'directions_car', text: 'A1 - B - BTP'},],
            listToogle: true,
            textToogle: false,
            imgToogle: false,
            linkToogle: false,
            methodToogle: false,
            lenguageToogle: false,
          },
          {
            icon: 'email',
            title: 'Contacto',
            points: [
              {icon: 'phone', text: '+34 685 348 612', direction: 'tel:+34 685 348 612'},
              {icon: 'alternate_email', text: 'marcosvalens@gmail.com', direction: 'mailto:marcosvalens@gmail.com'},
              {icon: 'ion-logo-github', text: 'github.com/marcosvalens', direction: 'https://github.com/marcosvalens'},
              {
                icon: 'ion-logo-linkedin',
                text: 'linkedin.com/in/marcosvalens',
                direction: 'https://www.linkedin.com/in/marcosvalens/'
              },],
            linkToogle: true,
            textToogle: false,
            imgToogle: false,
            listToogle: false,
            methodToogle: false,
            lenguageToogle: false,

          },
          {
            icon: 'timeline',
            title: 'Competencias',
            methodToogle: true,
            textToogle: false,
            imgToogle: false,
            listToogle: false,
            linkToogle: false,
            lenguageToogle: false,
          },
          {
            icon: 'mode_comment',
            title: 'Idiomas',
            points: [
              {url: '../assets/icons/Flag_Spain.svg', alt: 'Bandera de España', englishToogle: false},
              {url: '../assets/icons/Flag_Catalonia.svg', alt: 'Bandera de Cataluña', englishToogle: false},
              {url: '../assets/icons/gb.svg', alt: 'Bandera de Inglaterra', englishToogle: true},
            ],
            lenguageToogle: true,
            textToogle: false,
            imgToogle: false,
            listToogle: false,
            linkToogle: false,
            methodToogle: false,
          },
          {
            icon: 'add_circle_outline',
            title: 'Otras Competencias',
            points: [
              {
                bold: 'Primeros Auxilios:',
                text: 'Cerificado de Primeros Auxilios certificado por la Cruz Roja (25 horas - 2004)'
              },
              {
                bold: 'Curso de prevención de reisgos laborales:',
                text: 'Certificado por la academia Fomento Profesional (25 horas - 2014)'
              },
              {
                bold: 'Curso técnico instalador de energías renovables',
                text: 'Cerificado por la academa Fomento Profesional (800 horas - 2012)'
              },
              {
                bold: 'Curso de gas canalizado y altas de nuevo suministro:',
                text: 'Cerificado por la empresa Activais (50 horas - 2012)'
              },
            ],
            competenciasToogle: true,
            textToogle: false,
            imgToogle: false,
            listToogle: false,
            linkToogle: false,
            methodToogle: false,
            lenguageToogle: false
          }
        ]
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
