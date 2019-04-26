<template>
  <div padding>
    <q-btn class="bg-primary text-white q-my-md" aria-label="escanear">Escanear</q-btn>
    <div>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <p>Enfermeria</p>
              <q-input outlined v-model="text" label="Codigo RFID" class="myInput"/>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <p>Informática</p>
              <q-input outlined v-model="text" label="Codigo RFID" class="myInput"/>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section class="no-wrap">
            <q-item-label>
              <p>2º CFGS / CFGB</p>
              <q-input outlined v-model="text" label="Codigo RFID" class="myInput"/>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-btn class="bg-primary text-white q-ma-md" aria-label="guardar">Guardar</q-btn>
    <q-btn class="bg-primary text-white q-ma-md" aria-label="borrar">Borrar</q-btn>
  </div>
</template>

<script>
  export default {
    name: "RFID",
    data() {
      return {
        text:''
      }
    }
  }
</script>

<style scoped>
.myInput {
  width: 40%;
}
</style>
