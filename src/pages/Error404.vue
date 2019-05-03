<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Ups...parece que no la pagina que buscas no existe.<strong>(404)</strong></p>
    <q-btn
      color="negative"
      style="width:200px;"
      @click="$router.push('/')"
    >Atras</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
