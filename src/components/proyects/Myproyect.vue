<template>

  <v-dialog v-model="dialog2" persistent width="1200"  >
    <v-card>
      <h1>{{this.proyectaux.title}}</h1>
      <p>{{this.proyectaux.description}}</p>
      <v-btn color="primary" @click="dialog2=false" v-on:click="closeProyect">Cerrar</v-btn>
    </v-card>

  </v-dialog>
</template>

<script>
//import ProyectsApiService from "../../../src/core/services/proyects-api-service"
export default {
  name: "Myproyect",
  props:[
    'dialog2',
    'idsearch',
    'proyectaux'
  ],
  data:()=>({
    cont:this.idsearch,

  }),
  methods:{
    closeProyect(){
      this.$emit('close-Proyect',this.dialog2)
    },

}
}
</script>

<style scoped>

</style>