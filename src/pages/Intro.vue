<template>
  <div id="q-app">
    <div class="q-pa-xl">
      <div class="row flex justify-center" style="height: 75vh;">
        <div class="element col-lg-6 col-sm-12 text-justify"></div>
      </div>
      <div class="row flex justify-center">
          <q-btn
            class="q-mt-lg"
            to="/index"
            color="negative"
            label="Adelante"
          />
    </div>
  </div>
  </div>
</template>

<script>
  import Typed from 'typed.js'

  export default {
    name: "intro",
    mounted() {
      var typed = new Typed('.element', {
        strings: ["Hola, soy Marcos Valens, un amante de la programación web, y como tenía un rato libre y parece ser " +
        "que sin experiencia no soy capaz de encontrar un trabajo de lo que realmente me apasiona, he decidido hacer " +
        "esta pequeña web, donde podreis ver algunas de mis cualidades de la parte “Front-End” y aunque no podáis verlo " +
        "también hay alguna cosa muy básica de la parte de “Back-End”. Recordad que si mi presentación se hace muy " +
        "pesada siempre os la podéis saltar haciendo click en el botón. Saludos!!", "Como recién graduado, me " +
        "encantaría poder entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos y, al " +
        "mismo tiempo, que me permita desarrollarme profesionalmente. Gracias a mi formación especializada, considero " +
        "que puedo aportar valor y seguir desarrollándome profesionalmente en una compañía que coincida con mis valores " +
        "y expectativas. Como persona organizada y con una gran motivación.", "Soy capaz de adaptarme a cualquier " +
        "circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar " +
        "en equipo y fomentar valores como los del compañerismo. Soy una persona emprendedora, que adora los retos y no " +
        "se rinde fácilmente. Muy detallista y autodidacta cada día, nunca dejo de aprender y tengo un especial don de " +
        "gentes. Acostumbrado al trabajo bajo presión, tengo varios años de experiencia en atención al cliente. También " +
        "me considero una persona resolutiva, con buen ánimo y capaz de resolver problemas fácilmente."],
        typeSpeed: 30
      })
    }
  }
</script>

<style scoped>
  .element {
    font-size: large;
    font-display: block;
  }
</style>
