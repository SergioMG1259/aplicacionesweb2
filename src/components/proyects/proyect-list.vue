<template>

<v-container grid-list-md>
  <v-btn @click="addProyects" color="purple" class="white--text">Agregar Proyecto</v-btn>
  <v-layout row wrap >
    <v-flex xs12 sm6 v-for="proyect in proyects" :key="proyect.title"  >
          <v-card @click="dialog=true" v-on:click="GetIdProyect(proyect.id), Getproyect(),Borrarluego()">
            <v-card-title >{{proyect.title}}</v-card-title>
          </v-card>
    </v-flex>
    <v-dialog v-model="dialogadd">
      <v-card>
        <v-card-title>
          <span class="text-h5">Nuevo proyecto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    label="Nombre del proyecto"
                    required
                ></v-text-field>
                <small>*indicates required field</small>
              </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <myproyect :dialog2="dialog" @close-Proyect="CloseProyect" :idsearch="indexcurrent" :proyectaux="proyectaux" @deleteProyect="DeleteMyProyect"></myproyect>
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
    proyectaux:null,
    dialogadd:false,
    lastIdProyect:0,
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
      this.dialogadd=true
      /*let dato={id:this.proyects.length+1,title:"Clash 3",description:"lorem ipsum"}
      console.log(this.proyects.length+1)
      ProyectsApiService.create(dato)
      .then(this.refreshlist)*/

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
    },
    DeleteMyProyect(indexdelete){
      console.log('aber'+indexdelete)
      ProyectsApiService.delete(indexdelete)
      .then(this.refreshlist)
      console.log('aber'+indexdelete)
      this.dialog=false
    },
    Borrarluego(){
      console.log(this.proyects)
      let encontrar = this.proyects;
      
      for (let i = 0; i < encontrar.length; i++) {
        console.log(encontrar[i].id)
        for (let j = i; j < encontrar.length; j++) {
            if(encontrar[j].id>encontrar[i].id){
               this.lastIdProyect = encontrar[j].id;
            }    
          
        }
      }
      console.log("El ultimo id es:", this.lastIdProyect )
    }

  },
  mounted() { /*importante porque aqui carga la lista de proyects*/
    this.retrieveProyect();
  }
}
</script>

<style scoped>

</style>