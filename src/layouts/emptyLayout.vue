<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'emptyLayout',
    data () {
      return {
         leftDrawerOpen: this.$q.platform.is.desktop
      }
    },
    methods: {
      openURL
    }
  }
</script>

<style>
</style>
