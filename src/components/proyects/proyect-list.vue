<template>

<v-container grid-list-md>
  <v-btn @click="addProyects" color="purple" class="white--text">Agregar Proyecto</v-btn>
  <v-layout row wrap >
    <v-flex xs12 sm6 v-for="proyect in proyects" :key="proyect.title"  >
          <v-card @click="dialog=true" v-on:click="GetIdProyect(proyect.id), Getproyect()">
            <v-card-title >{{proyect.title}}</v-card-title>

          </v-card>
    </v-flex>
    <myproyect :dialog2="dialog" @close-Proyect="CloseProyect" :idsearch="indexcurrent" :proyectaux="proyectaux"></myproyect>
  </v-layout>
</v-container>
</template>

<script>
import ProyectsApiService from "../../../src/core/services/proyects-api-service"
import Myproyect from "@/components/proyects/Myproyect";
export default {
  name: "proyect-list",
  components: {Myproyect},
  props:{

  },
  data:()=>({
    proyects:[],
    currentindex:0,
    dialog:false ,
    indexcurrent:null,
    proyectaux:null
  }),
  methods:{
    getDisplayProyect(proyect){
      return{
        id:proyect.id,
        title:proyect.title,
        description:proyect.description
      }
    },
    retrieveProyect(){
      ProyectsApiService.getAll()
      .then(response=>{
        this.proyects=response.data.map(this.getDisplayProyect);
        console.log(response.data);
        //console.log(this.proyects.length)
      })
      .catch(e=>{
        console.log(e);
      })
    },
    refreshlist(){
      this.retrieveProyect()
    },
    addProyects(){
      let dato={id:this.proyects.length+1,title:"Clash 3",description:"lorem ipsum"}
      ProyectsApiService.create(dato)
      .then(this.refreshlist)
    },
    CloseProyect(dialog2){
      this.dialog=dialog2
    },
    GetIdProyect(item){
      this.indexcurrent=item
    },
    Getproyect(){
      ProyectsApiService.getById(this.indexcurrent)
      .then(response=>{
        this.proyectaux=response.data
        console.log(response.data)
        console.log(this.proyectaux.title)
      })
    }

  },
  mounted() { /*importante porque aqui carga la lista de proyects*/
    this.retrieveProyect();
  }
}
</script>

<style scoped>

</style>