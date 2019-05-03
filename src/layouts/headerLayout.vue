<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Marcos Valens</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      indicator-color="negative"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item clickable v-ripple:negative to="/index">
          <q-item-section avatar>
            <q-icon color="blue" name="format_list_bulleted" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item clickable v-ripple:negative to="/skills">
          <q-item-section avatar>
            <q-icon color="blue" name="build" />
          </q-item-section>
          <q-item-section>Skills</q-item-section>
        </q-item>

        <q-item class="hidden" clickable v-ripple:negative to="/portfolio">
          <q-item-section avatar>
            <q-icon color="blue" name="work" />
          </q-item-section>

          <q-item-section>Portfolio</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
  import {openURL} from 'quasar'

  export default {
    name: 'headerLayout',
    data() {
      return {
        drawer: false,
        numberNotifications: '8',
      }
    },
    methods: {
      openURL,
      /*general: function () {
        this.$router.push('/general')
      },
      validar: function () {
        this.$router.push('/validar')
      },
      xml:function () {
        this.$router.push('/upload')
      },
      asignar:function () {
        this.$router.push('/asignar')
      }*/
    }
  }
</script>

<style>
  #liceu {
    width: 9%
  }
</style>
