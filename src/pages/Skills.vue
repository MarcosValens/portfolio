<template>
  <div class="q-pa-md">
    <div class="row flex justify-center">
      <ul class='circle-container q-ma-xl'>
        <li @mouseenter="jsSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="js"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/js6.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="webpackSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="webpack"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/webpack.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="gitSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="git"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/git.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="sassSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="sass"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/Sass_Logo.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="vueSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="vue"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/vue.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="quasarSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="quasar"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/quasar.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="htmlSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="html"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/html5.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="cssSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="css"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/css3.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li>
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="null"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/fotocarnet.png">
            </q-avatar>
          </q-circular-progress>
        </li>
      </ul>
      <ul class='circle-container q-ma-xl'>
        <li @mouseenter="mysqlSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="mysql"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/mysql_logo.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="apacheSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="apache"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/apache.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="tomcatSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="tomcat"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/tomcat.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="javaSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="java"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/java_logo.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="gulpSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="gulp"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/gulp.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="cordovaSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="cordova"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/Cordova.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="photoshopSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="photoshop"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/photoshop.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="illustratorSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="illustrator"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/illustrator_.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
        <li @mouseenter="npmSkill" @mouseleave="SkillReset">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md"
            :value="npm"
            size="80px"
            :thickness="0.25"
            color="negative"
            track-color="grey-3"
          >
            <q-avatar size="60px" class="bg-white">
              <img src="../assets/icons/Npm-logo.svg">
            </q-avatar>
          </q-circular-progress>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skills",
    data() {
      return {
        html: 0,
        css: 0,
        js: 0,
        sass: 0,
        vue: 0,
        quasar: 0,
        npm: 0,
        java: 0,
        mysql: 0,
        webpack: 0,
        git: 0,
        apache: 0,
        tomcat: 0,
        gulp: 0,
        cordova: 0,
        photoshop: 0,
        illustrator: 0,
        foto:0
      }
    },
    methods: {
      htmlSkill() {
        this.html = 95
      },
      SkillReset() {
        this.html = 0,
        this.css = 0,
        this.js = 0,
        this.sass = 0,
        this.vue = 0,
        this.quasar = 0,
        this.npm = 0,
        this.webpack = 0,
        this.java = 0,
        this.mysql = 0,
        this.git = 0,
        this.apache = 0,
        this.tomcat = 0,
        this.gulp = 0,
        this.cordova = 0,
        this.photoshop = 0,
        this.illustrator = 0
      },
      cssSkill() {
        this.css = 90
      },
      jsSkill() {
        this.js = 85
      },
      sassSkill() {
        this.sass = 70
      },
      vueSkill() {
        this.vue = 80
      },
      quasarSkill() {
        this.quasar = 85
      },
      npmSkill() {
        setTimeout(() => {
          this.npm = 90
        }, 100)
      },
      webpackSkill() {
        this.webpack = 60
      },
      javaSkill() {
        this.java = 75
      },
      mysqlSkill() {
        this.mysql = 70
      },
      gitSkill() {
          this.git = 85
      },
      apacheSkill() {
          this.apache = 75
      },
      tomcatSkill() {
          this.tomcat = 75
      },
      gulpSkill() {
          this.gulp = 80
      },
      cordovaSkill() {
          this.cordova = 40
      },
      photoshopSkill() {
          this.photoshop = 85
      },
      illustratorSkill() {
        this.illustrator = 85
      },
    }
  }
</script>

<style lang="scss" scoped>
  @mixin on-circle($item-count, $circle-size, $item-size) {
    position: relative;
    width: $circle-size;
    height: $circle-size;
    padding: 0;
    border-radius: 50%;
    list-style: none;

    > * {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: $item-size;
      height: $item-size;
      margin: -($item-size / 2);

      $angle: (360 / $item-count);
      $rot: 0;

      @for $i from 1 through $item-count {
        &:nth-of-type(#{$i}) {
          transform: rotate($rot * 1deg) translate($circle-size / 2) rotate($rot * -1deg);
        }

        $rot: $rot + $angle;
      }
    }
  }

  .circle-container {
    @include on-circle($item-count: 8, $circle-size: 20em, $item-size: 6em);
    border: solid 5px tomato;

    img {
      display: block;
      max-width: 100%;
      border-radius: 50%;
      filter: grayscale(100%);
      border: solid 5px tomato;
      transition: .15s;

      &:hover,
      &:active {
        filter: grayscale(0);
      }
    }
  }
</style>
