<template>

  <v-dialog v-model="dialog2" persistent width="1200"  >
    <v-card>
      <v-toolbar color="white" flat>
        <v-btn color="purple" @click="dialog2=false" v-on:click="closeProyect" class="white--text"><v-icon>
          mdi-close
        </v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-icon x-large color="purple">
          mdi-pencil
        </v-icon>
      </v-toolbar>
      <h1 align="center">{{this.proyectaux.title}}</h1>
      <p>{{this.proyectaux.description}}</p>

      <v-btn color="red" @click="dialogDelete=true">Eliminar </v-btn>
    </v-card>
    <v-dialog v-model="dialogDelete" width="400">
      <v-card>
        <v-btn color="success" @click="DeleteAlert" v-on:click="closeProyect, dialog2=false">
          confirmar
        </v-btn>
        <v-btn @click="dialogDelete=false" color="error">
          cancelar
        </v-btn>
      </v-card>
    </v-dialog>

  </v-dialog>
</template>

<script>
//import ProyectsApiService from "../../../src/core/services/proyects-api-service"
export default {
  name: "Myproyect",
  props: {
    dialog2: Boolean,
    idsearch:null,
    proyectaux:null,
    dialogDelete:Boolean
  },
  data:()=>({
    cont:this.idsearch,
    dialogDelete:false
  }),
  methods:{
    closeProyect(){
      this.$emit('close-Proyect',this.dialog2)
    },
    DeleteAlert(){
      this.$emit('deleteProyect',this.idsearch)
    }
}
}
</script>

<style scoped>

</style>