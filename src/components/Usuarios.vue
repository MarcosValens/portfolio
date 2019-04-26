<template>
  <div padding>
    <q-select rounded outlined v-model="model" :options="options" label="Grupo"/>
    <q-btn class="bg-primary text-white q-my-md" aria-label="escanear">Escanear</q-btn>
    <q-table
      title="Usuarios"
      :data="data"
      :columns="columns"
      row-key="nombre"
      selection="single"
      :selected.sync="selected"
    />
    <q-btn class="bg-primary text-white q-ma-md" aria-label="guardar">Guardar</q-btn>
    <q-btn class="bg-primary text-white q-ma-md" aria-label="borrar">Borrar</q-btn>
  </div>
</template>

<script>
  export default {
    name: "Usuarios",
    data() {
      return {
        selected:[],
        model: null,
        data: [
          {
            nombre: 'Marcos Valens',
            numTarRFID: 159,
          },
          {
            nombre: 'Julien Gillet',
            numTarRFID: 237,
          },
          {
            nombre: 'Pau Palou',
            numTarRFID: 262,
          },
          {
            nombre: 'Joan Cabot',
            numTarRFID: 305,
          },
          {
            nombre: 'Tomeu Penya',
            numTarRFID: 356,
          },
          {
            nombre: 'Xavier Torrens',
            numTarRFID: 375,
          },
          {
            nombre: 'Joan Galmes',
            numTarRFID: 392,
          },
          {
            nombre: 'Pep Buades',
            numTarRFID: 408,
          },
          {
            nombre: 'Pere Negre',
            numTarRFID: 452,
          },
          {
            nombre: 'Ana Escudero',
            numTarRFID: 518,
          }
        ],
        options: [
          '1º CFGS', '2º CFGS', '1º A E.S.O.', 'Enfermeria', 'CFGB'
        ],
        columns: [
          {
            name: 'nombre',
            label: 'Nombre',
            field: 'nombre',
            required: true,
            align: 'left',
            sortable: true,
          },
          {
            name: 'numTarRFID',
            label: 'Numero de tarjeta RFID',
            field: 'numTarRFID',
            required: true,
            align: 'left',
            sortable: true,
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
